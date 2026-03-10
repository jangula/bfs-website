'use client';

import { useState } from 'react';
import FilterBar from '@/components/ui/FilterBar';
import DocumentCard from '@/components/ui/DocumentCard';

interface Document {
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  publishedDate: string;
}

interface DocumentFilterProps {
  documents: Document[];
}

const filters = [
  { label: 'All', value: 'All' },
  { label: 'Forms', value: 'Forms' },
  { label: 'Brochures', value: 'Brochures' },
  { label: 'Reports', value: 'Reports' },
  { label: 'Policies', value: 'Policies' },
];

export default function DocumentFilter({ documents }: DocumentFilterProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? documents
      : documents.filter((doc) => doc.category === activeFilter);

  return (
    <>
      <div className="mb-8">
        <FilterBar
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((doc) => (
          <DocumentCard
            key={doc.title}
            title={doc.title}
            description={doc.description}
            category={doc.category}
            fileUrl={doc.fileUrl}
            publishedDate={doc.publishedDate}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-slate">
          No documents found in this category.
        </p>
      )}
    </>
  );
}
