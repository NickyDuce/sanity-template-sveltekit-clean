// /schemas/studio.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'studio',
  title: 'Studio',
  type: 'document',
  fields: [
    //slug
    defineField({ 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'studioImage',
      title: 'Studio Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'welcome',
      title: 'Welcome',
      type: 'string',
      validation: Rule => Rule.max(300),
    }),
    defineField({
      name: 'section01',
      title: 'Section 01 (Story)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.max(30) },
        { name: 'part1', title: 'Part 1', type: 'text', validation: Rule => Rule.max(250) },
        { name: 'part2', title: 'Part 2', type: 'text', validation: Rule => Rule.max(250) },
      ],
    }),
    defineField({
      name: 'section02',
      title: 'Section 02 (Studio)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.max(30) },
        { name: 'description', title: 'Description', type: 'text', validation: Rule => Rule.max(400) },
        { name: 'subHeading1', title: 'Sub-heading 1', type: 'string', validation: Rule => Rule.max(50) },
        { name: 'subHeading2', title: 'Sub-heading 2', type: 'string', validation: Rule => Rule.max(50) },
        { name: 'part1', title: 'Part 1', type: 'text', validation: Rule => Rule.max(600) },
        { name: 'part2', title: 'Part 2', type: 'text', validation: Rule => Rule.max(600) },
      ],
    }),
    defineField({
      name: 'faces',
      title: 'Section 06 (Faces)',
      type: 'object',
      fields: [
        { name: 'footage', title: 'Fooetage', type: 'file', options: { accept: 'video/mp4' } },
        { name: 'theTeam', title: 'The Team', type: 'string', validation: Rule => Rule.max(200) },
        {
          name: 'partnerList',
          title: 'Partner List',
          type: 'array',
          of: [
            defineField({
              name: 'partner',
              title: 'Partner',
              type: 'object',
              fields: [
                { name: 'name', title: 'Name', type: 'string' },
                { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
                { name: 'role', title: 'Role', type: 'string' },
                { name: 'linkedIn', title: 'LinkedIn', type: 'url' },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
