import { defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    // Product Name
    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    },

    // Slug (Auto-generated)
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name", // Generates slug based on the product name
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },

    // Product Type (Dropdown for "seating", "tables", etc.)
    {
      name: "type",
      title: "Product Type",
      type: "string",
      options: {
        list: [
          { title: "Seating", value: "seating" },
          { title: "Tables", value: "tables" },
          { title: "Lighting", value: "lighting" },
          { title: "Storage", value: "storage" },
          { title: "Objects", value: "objects" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },

    // Product Description
    {
      name: "description",
      title: "Product Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(5000),
    },
    // Product Care main
    {
        name: "maintenance",
        title: "Care Maintenance",
        type: "text",
        validation: (Rule) => Rule.required().min(10).max(5000),
        },

    // Sale Price
    {
      name: "salePrice",
      title: "Sale Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
        name: "quantity",
        title: "Product Quantity",
        type: "number",
        validation: (Rule) => Rule.required().min(0),
      },

    // Upload for 5 images
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(5)
          .error("You must upload 4 images."),
    },

    // Product Specifications Object
    {
      name: "specifications",
      title: "Product Specifications",
      type: "object",
      fields: [
        { name: "width", title: "Width", type: "string" },
        { name: "height", title: "Height", type: "string" },
        { name: "length", title: "Length", type: "string" },
        { name: "material", title: "Material", type: "string" },
        { name: "colour", title: "Colour", type: "string" },
      ],
    },

    // Product Creator Name
    {
      name: "creator",
      title: "Product Creator",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    // Country of Origin
    {
      name: "countryOfOrigin",
      title: "Country of Origin",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    // Product Number (Auto-generated)
    {
      name: "productNumber",
      title: "Product Number",
      type: "number",
      options: {
        isUnique: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "type",
      media: "images.0",
    },
  },
});
