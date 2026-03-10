import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'impactStat',
  title: 'Impact Stat',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'number',
    }),
    defineField({
      name: 'prefix',
      title: 'Prefix',
      type: 'string',
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})
