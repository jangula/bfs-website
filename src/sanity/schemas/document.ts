import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bfsDocument',
  title: 'Document',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Forms', value: 'Forms' },
          { title: 'Brochures', value: 'Brochures' },
          { title: 'Reports', value: 'Reports' },
          { title: 'Policies', value: 'Policies' },
        ],
      },
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx,.xls,.xlsx',
      },
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
    }),
  ],
})
