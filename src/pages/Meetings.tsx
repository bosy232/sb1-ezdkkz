import React from 'react';
import { Calendar, MapPin, Users, Download, Video, FileText } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

interface MeetingData {
  [year: string]: {
    date: string;
    venue: string;
    attendees: number;
    highlights: string[];
    proceedings: string;
    presentations: string[];
  };
}

const meetingsData: MeetingData = {
  '2024': {
    date: 'September 15-17, 2024',
    venue: 'Cairo International Convention Center',
    attendees: 500,
    highlights: [
      'Latest Advances in IVF',
      'Reproductive Genetics',
      'Fertility Preservation'
    ],
    proceedings: '#',
    presentations: [
      'Opening Ceremony',
      'Keynote Speeches',
      'Panel Discussions'
    ]
  },
  '2023': {
    date: 'September 20-22, 2023',
    venue: 'Cairo International Convention Center',
    attendees: 450,
    highlights: [
      'Endometriosis Management',
      'Male Infertility',
      'PCOS Updates'
    ],
    proceedings: '#',
    presentations: [
      'Research Presentations',
      'Workshop Recordings',
      'Closing Ceremony'
    ]
  }
};

const MeetingContent = ({ year }: { year: string }) => {
  const meeting = meetingsData[year];
  
  if (!meeting) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Meeting information not available</h2>
      </div>
    );
  }

  return (
    <AnimatedSection animation="fade-in">
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">
            EFSS Annual Meeting {year}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-[#1abc9c] mr-3" />
              <span>{meeting.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-[#1abc9c] mr-3" />
              <span>{meeting.venue}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-[#1abc9c] mr-3" />
              <span>{meeting.attendees}+ Attendees</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Meeting Highlights</h3>
              <ul className="space-y-3">
                {meeting.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <FileText className="h-4 w-4 text-[#1abc9c] mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Available Content</h3>
              <ul className="space-y-3">
                {meeting.presentations.map((presentation, index) => (
                  <li key={index} className="flex items-center">
                    <Video className="h-4 w-4 text-[#1abc9c] mr-2" />
                    {presentation}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="flex items-center bg-[#1abc9c] text-white px-6 py-3 rounded-lg hover:bg-[#16a085] transition-colors">
              <Download className="h-5 w-5 mr-2" />
              Download Proceedings
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Meetings = () => {
  const { year } = useParams();
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="relative py-20 bg-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Annual Meetings</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Join us for our prestigious annual conferences and meetings
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center space-x-4">
            {[currentYear, currentYear - 1, currentYear - 2, currentYear - 3].map((y) => (
              <Link
                key={y}
                to={`/meetings/${y}`}
                className={`px-4 py-2 rounded-md transition-colors ${
                  year === y.toString()
                    ? 'bg-[#1abc9c] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {y}
              </Link>
            ))}
          </div>

          {year ? (
            <MeetingContent year={year} />
          ) : (
            <MeetingContent year={currentYear.toString()} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Meetings;