
interface StringField {
    name: string;
    title: string;
    type: 'string';
    description?: string;
    validation?: (Rule: any) => any;
}
interface slugField {
    name: string;
    title: string;
    type: 'slug';
    validation: (Rule: any) => any;
    options: { source: string; maxLength: number };
}



interface ImageField {
    name: string;
    title: string;
    type: 'image';
    options: { hotspot: boolean };
}

interface StringField {
    name: string;
    title: string;
    type: 'string';
    description?: string;
    validation?: (Rule: any) => any;
}

interface ArrayField {
    name: string;
    title: string;
    type: 'array';
    of: { type: 'string' }[];
}

interface ObjectField {
    name: string;
    title: string;
    type: 'object';
    fields: (StringField | ImageField)[];
}

interface DocumentSchema {
    name: string;
    title: string;
    type: 'document';
    fields: (ImageField | StringField | ArrayField | ObjectField | slugField)[];
}

const projectSchema: DocumentSchema = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
        name: 'projectTitle',
        title: 'Title',
        type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                source: 'projectTitle',
                maxLength: 96,
            },
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'completionDate',
            title: 'Completion Date',
            type: 'string',
            description: 'Format: month / year',
        },
        {
            name: 'sector',
            title: 'Project Sector',
            type: 'string',
        },
        {
            name: 'client',
            title: 'Client',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'overview',
            title: 'Section 01: Overview',
            type: 'object',
            fields: [
                { name: 'boldSummary', title: 'Bold Summary', type: 'string', validation: Rule => Rule.max(100) },
                { name: 'briefContent', title: 'Brief Content', type: 'string', validation: Rule => Rule.max(750) },
            ],
        },
        {
            name: 'challenges',
            title: 'Section 02: Challenges',
            type: 'object',
            fields: [
                { name: 'approach', title: 'Approach', type: 'string', validation: Rule => Rule.max(550) },
                { name: 'image1', title: 'Image 1', type: 'image', options: { hotspot: true } },
                { name: 'image2', title: 'Image 2', type: 'image', options: { hotspot: true } },
                { name: 'boldSummary', title: 'Bold Summary', type: 'string', validation: Rule => Rule.max(100) },
                { name: 'briefContent', title: 'Brief Content', type: 'string', validation: Rule => Rule.max(750) },
                { name: 'image3', title: 'Image 3', type: 'image', options: { hotspot: true } },
                { name: 'image4', title: 'Image 4', type: 'image', options: { hotspot: true } },
            ],
        },
        {
            name: 'imageGrid',
            title: 'Image Grid',
            type: 'object',
            fields: [
                { name: 'image1', title: 'Small Image 1', type: 'image', options: { hotspot: true } },
                { name: 'image2', title: 'Small Image 2', type: 'image', options: { hotspot: true } },
                { name: 'image3', title: 'Small Image 3', type: 'image', options: { hotspot: true } },
                { name: 'largeImage', title: 'Large Image', type: 'image', options: { hotspot: true } },
            ],
        },
        {
            name: 'outcome',
            title: 'Section 03: Outcome',
            type: 'object',
            fields: [
                { name: 'boldSummary', title: 'Bold Summary', type: 'string', validation: Rule => Rule.max(300) },
                { name: 'briefContent', title: 'Brief Content', type: 'string', validation: Rule => Rule.max(750) },
            ],
        },
    ],
};

export default projectSchema;
  