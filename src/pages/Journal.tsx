import React, { useState } from 'react';
import { BookOpen, FileText, Send, Search, Download, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface JournalIssue {
  volume: number;
  issue: number;
  date: string;
  articles: {
    title: string;
    authors: string;
    abstract: string;
  }[];
}

const currentIssue: JournalIssue = {
  volume: 35,
  issue: 2,
  date: 'March 2024',
  articles: [
    {
      title: 'Advanced Techniques in Reproductive Medicine',
      authors: 'Ahmed M., Sarah K., John D.',
      abstract: 'This study explores the latest developments in reproductive medicine...'
    },
    {
      title: 'Impact of Lifestyle on Fertility',
      authors: 'Mohamed R., Lisa T.',
      abstract: 'A comprehensive analysis of how lifestyle factors affect fertility rates...'
    }
  ]
};

const Journal = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'archive' | 'submit'>('current');

  const renderContent = () => {
    switch (activeTab) {
      case 'current':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">
                Volume {currentIssue.volume}, Issue {currentIssue.issue}
              </h2>
              <p className="text-gray-600 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {currentIssue.date}
              </p>
            </div>

            <div className="space-y-8">
              {currentIssue.articles.map((article, index) => (
                <div key={index} className="border-b pb-6 last:border-b-0">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-3">Authors: {article.authors}</p>
                  <p className="text-gray-700 mb-4">{article.abstract}</p>
                  <button className="flex items-center text-[#1abc9c] hover:text-[#16a085] font-semibold">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'archive':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1abc9c]"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[34, 33, 32, 31].map((volume) => (
                <div key={volume} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-2">Volume {volume}</h3>
                  <ul className="space-y-2">
                    {[4, 3, 2, 1].map((issue) => (
                      <li key={issue}>
                        <button className="text-[#1abc9c] hover:text-[#16a085] flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Issue {issue}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'submit':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Submit Your Paper</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Submission Guidelines</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Manuscripts must be original and unpublished</li>
                  <li>Follow the journal's formatting guidelines</li>
                  <li>Include abstract and keywords</li>
                  <li>Provide author information and affiliations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">How to Submit</h3>
                <p className="text-gray-700 mb-4">
                  Please prepare your manuscript according to the guidelines and submit through our online system.
                </p>
                <button className="bg-[#1abc9c] text-white px-6 py-3 rounded-lg hover:bg-[#16a085] transition-colors flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  Start Submission Process
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="relative py-20 bg-[#2C3E50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">EFSS Journal</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Leading research in reproductive medicine and fertility studies
            </p>
          </div>
        </div>
      </section>

      <AnimatedSection animation="fade-in">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg bg-gray-100 p-1">
                {[
                  { key: 'current', icon: <BookOpen className="h-5 w-5" />, label: 'Current Issue' },
                  { key: 'archive', icon: <FileText className="h-5 w-5" />, label: 'Archive' },
                  { key: 'submit', icon: <Send className="h-5 w-5" />, label: 'Submit Paper' }
                ].map(({ key, icon, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as 'current' | 'archive' | 'submit')}
                    className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                      activeTab === key
                        ? 'bg-white text-[#1abc9c] shadow'
                        : 'text-gray-600 hover:text-[#1abc9c]'
                    }`}
                  >
                    {icon}
                    <span className="ml-2">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {renderContent()}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Journal;