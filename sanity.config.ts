import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import type { StructureBuilder } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('fund').title('Funds'),
      S.documentTypeListItem('opportunity').title('Opportunities'),
      S.documentTypeListItem('bfsDocument').title('Documents'),
      S.documentTypeListItem('newsPost').title('News Posts'),
      S.documentTypeListItem('career').title('Careers'),
      S.documentTypeListItem('teamMember').title('Team Members'),
      S.documentTypeListItem('impactStat').title('Impact Stats'),
    ])

export default defineConfig({
  name: 'default',
  title: 'BFS Website',

  projectId: 'lsddmhfh',
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool({ structure })],

  schema: {
    types: schemaTypes,
  },
})
