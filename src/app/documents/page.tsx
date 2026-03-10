import type { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';
import DocumentFilter from '@/components/ui/DocumentFilter';
import { client } from '@/sanity/lib/client';
import { getDocuments } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Document Center | BFS',
};

const documents = [
  {
    title: 'NPF II Application Form',
    description: 'Application form for the Namibia Prosperity Fund II bridging finance facility.',
    category: 'Forms',
    fileUrl: '#',
    publishedDate: '2024-06-15',
  },
  {
    title: 'NPF II Brochure',
    description: 'Overview brochure detailing the NPF II fund structure, terms, and eligibility criteria.',
    category: 'Brochures',
    fileUrl: '#',
    publishedDate: '2024-05-20',
  },
  {
    title: 'Impact Report - June 2024',
    description: 'Comprehensive report on BFS portfolio impact, ESG metrics, and development outcomes.',
    category: 'Reports',
    fileUrl: '#',
    publishedDate: '2024-06-30',
  },
  {
    title: 'ESG Policy Framework',
    description: 'Environmental, social, and governance policy framework governing all BFS investment activities.',
    category: 'Policies',
    fileUrl: '#',
    publishedDate: '2024-03-01',
  },
  {
    title: 'NamPro Fund Overview',
    description: 'Detailed overview of the NamPro bridging finance fund including performance highlights.',
    category: 'Brochures',
    fileUrl: '#',
    publishedDate: '2024-04-10',
  },
  {
    title: 'Application Guidelines',
    description: 'Step-by-step guidelines for completing and submitting fund applications to BFS.',
    category: 'Forms',
    fileUrl: '#',
    publishedDate: '2024-07-01',
  },
];

export default async function DocumentsPage() {
  const sanityDocs = await client.fetch(getDocuments).catch(() => []);
  const docs =
    sanityDocs && sanityDocs.length > 0
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sanityDocs.map((doc: any) => ({
          title: doc.title,
          description: doc.description,
          category: doc.category,
          fileUrl: doc.fileUrl,
          publishedDate: doc.publishedDate,
        }))
      : documents;

  return (
    <main>
      <PageBanner
        eyebrow="Resources"
        title="Document Download Center"
        description="Access forms, brochures, reports, and policy documents. All resources available for download."
      />

      <section className="bg-white py-16">
        <div className="container">
          <DocumentFilter documents={docs} />

          <p className="mt-12 text-center text-sm text-slate">
            Documents are managed through our CMS. Contact{' '}
            <a href="mailto:admin@bfs.com.na" className="text-teal hover:underline">
              admin@bfs.com.na
            </a>{' '}
            for additional resources.
          </p>
        </div>
      </section>
    </main>
  );
}
