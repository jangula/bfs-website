'use client';

import { useState } from 'react';
import FilterBar from '@/components/ui/FilterBar';
import OpportunityCard from '@/components/ui/OpportunityCard';

interface Opportunity {
  title: string;
  description: string;
  sector: string;
  investmentRange: string;
  stage: string;
}

const filters = [
  { label: 'All Sectors', value: 'all' },
  { label: 'Agriculture', value: 'agriculture' },
  { label: 'Energy', value: 'energy' },
  { label: 'Digital', value: 'digital' },
  { label: 'SME Development', value: 'sme' },
];

interface OpportunityFilterProps {
  opportunities: Opportunity[];
}

export default function OpportunityFilter({ opportunities }: OpportunityFilterProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? opportunities
      : opportunities.filter(
          (o) => o.sector.toLowerCase() === activeFilter,
        );

  return (
    <div>
      <FilterBar
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((opportunity) => (
          <OpportunityCard key={opportunity.title} {...opportunity} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-slate">
          No opportunities found in this sector.
        </p>
      )}
    </div>
  );
}
