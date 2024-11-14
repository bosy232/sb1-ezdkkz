import React from 'react';
import { FileText, Download } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  year: string;
  type: string;
  url: string;
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Annual Conference Proceedings',
    year: '2023',
    type: 'PDF',
    url: '#'
  },
  {
    id: '2',
    title: 'Research Guidelines',
    year: '2023',
    type: 'PDF',
    url: '#'
  },
  {
    id: '3',
    title: 'Membership Guidelines',
    year: '2023',
    type: 'PDF',
    url: '#'
  }
];

const Documents = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Document Library</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive collection of medical research papers, conference proceedings, and guidelines.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <FileText className="h-8 w-8 text-[#1abc9c] mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {doc.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span>{doc.year}</span>
                    <span>{doc.type}</span>
                  </div>
                </div>
                <button
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 hover:bg-[#1abc9c] hover:text-white transition-colors"
                  aria-label="Download document"
                >
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;