import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'fund',
  title: 'Fund',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'statValue',
      title: 'Stat Value',
      type: 'string',
    }),
    defineField({
      name: 'statLabel',
      title: 'Stat Label',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})
