'use client';

import { useState } from 'react';
import RoleCard from '@/components/ui/RoleCard';

interface Role {
  title: string;
  description: string;
  location: string;
  closingDate: string;
  type: string;
}

interface CareersSectionProps {
  roles: Role[];
}

export default function CareersSection({ roles }: CareersSectionProps) {
  const [showClosed, setShowClosed] = useState(false);

  const now = new Date();
  const openRoles = roles.filter((r) => new Date(r.closingDate) >= now);
  const closedRoles = roles.filter((r) => new Date(r.closingDate) < now);
  const displayedRoles = showClosed ? roles : openRoles;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-slate">
          Showing {displayedRoles.length} of {roles.length} role
          {roles.length !== 1 ? 's' : ''}
          {!showClosed && closedRoles.length > 0 && (
            <span>
              {' '}&middot; {closedRoles.length} archived role
              {closedRoles.length !== 1 ? 's' : ''} hidden
            </span>
          )}
        </p>
        {closedRoles.length > 0 && (
          <button
            onClick={() => setShowClosed(!showClosed)}
            className="rounded-full border border-[#d6d1c9] bg-white px-4 py-2 text-sm font-medium text-slate transition-colors duration-200 hover:border-navy/30 hover:text-ink"
          >
            {showClosed ? 'Hide Closed Roles' : 'Show Closed Roles'}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {displayedRoles.map((role) => (
          <RoleCard key={role.title + role.closingDate} {...role} />
        ))}
      </div>

      {displayedRoles.length === 0 && (
        <p className="mt-8 text-center text-slate">
          No open roles at the moment. Check back soon.
        </p>
      )}
    </div>
  );
}
