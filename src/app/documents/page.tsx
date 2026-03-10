import type { Metadata } from 'next';
import PageBanner from '@/components/ui/PageBanner';
import DocumentFilter from '@/components/ui/DocumentFilter';
import { client } from '@/sanity/lib/client';
import { getDocuments } from '@/sanity/lib/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Document Center | BFS',
};

export default async function DocumentsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sanityDocs: any[] = await client.fetch(getDocuments).catch(() => []);
  const docs = sanityDocs.map((doc) => ({
    title: doc.title || '',
    description: doc.description || '',
    category: doc.category || 'General',
    fileUrl: doc.fileUrl || '#',
    publishedDate: doc.publishedDate || '',
  }));

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
