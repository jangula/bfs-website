import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'opportunity',
  title: 'Opportunity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Agriculture', value: 'agriculture' },
          { title: 'Energy', value: 'energy' },
          { title: 'Digital', value: 'digital' },
          { title: 'SME', value: 'sme' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'investmentRange',
      title: 'Investment Range',
      type: 'string',
    }),
    defineField({
      name: 'stage',
      title: 'Stage',
      type: 'string',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
