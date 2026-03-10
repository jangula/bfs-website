'use client';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  filters: FilterOption[];
  activeFilter: string;
  onFilterChange: (value: string) => void;
}

export default function FilterBar({
  filters,
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;
        return (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'bg-navy text-white'
                : 'bg-white text-slate border border-[#d6d1c9] hover:border-navy/30 hover:text-ink'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
