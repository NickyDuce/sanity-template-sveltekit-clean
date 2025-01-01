import {defineType} from 'sanity';

export default defineType({
    name:"home",
    title: "Home Page Content",
    type: "document",
    fields: [

        // Version
        {
            name: "version",
            title: "Home page Version",
            type: "string",
            validation: (Rule) => Rule.required().min(0),
          },
        //   Slug
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "version", // Generates slug based on the version
              maxLength: 100,
            },
            validation: (Rule) => Rule.required(),
          },

        // Header content
        {        
        name:"header",
        title:"Header Content",
        type:"string",
        validation: (Rule) => Rule.required().min(20).max(500),
        },
        {
            name: 'body',
            title: 'Body Content',
            type: 'object',
            fields: [
                { name: 'subHeading', title: 'Sub-heading', type: 'string', validation: Rule => Rule.max(50) },
              { name: 'body1', title: 'Body Paragraph 1', type: 'text', validation: Rule => Rule.max(400) },
              { name: 'body2', title: 'Body Paragraph 1', type: 'text', validation: Rule => Rule.max(400) },
            ],
          }
    ]
})