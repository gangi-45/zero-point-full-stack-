import { defineType, defineField } from "sanity";

const CONDITION_OPTIONS = [
  { title: "New", value: "new" },
  { title: "Used", value: "used" },
];

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "SEO-friendly URL. Auto-generated from title.",
      options: { source: "title", maxLength: 120 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (BDT)",
      type: "number",
      validation: (rule) => rule.required().positive().precision(2),
    }),
    defineField({
      name: "condition",
      title: "Condition",
      type: "string",
      options: { list: CONDITION_OPTIONS, layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: "model",
      title: "Model",
      type: "string",
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (rule) => rule.max(160),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1).max(10),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required().max(2000),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "inStock",
      title: "In stock",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "stockQuantity",
      title: "Stock quantity",
      type: "number",
      validation: (rule) => rule.min(0).integer(),
      initialValue: 0,
    }),
    defineField({
      name: "warranty",
      title: "Warranty",
      type: "string",
      description: 'e.g. "৭ দিন" or "1 year"',
      validation: (rule) => rule.max(80),
    }),
    defineField({
      name: "verifiedStatus",
      title: "Tested & verified",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "createdAt",
      title: "Created at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
    {
      title: "Featured first",
      name: "featuredDesc",
      by: [{ field: "isFeatured", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "price",
      media: "images.0",
    },
  },
});
