import { defineType, defineField } from "sanity";

export default defineType({
  name: "inquiry",
  title: "Inquiry",
  type: "document",
  fields: [
    defineField({
      name: "kind",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Exchange quote", value: "exchange" },
          { title: "Product inquiry", value: "product" },
        ],
        layout: "radio",
      },
      initialValue: "product",
    }),
    defineField({
      name: "customerName",
      title: "Customer name",
      type: "string",
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (rule) => rule.max(20),
    }),
    defineField({
      name: "deviceName",
      title: "Device name",
      type: "string",
      description: "For exchange quotes",
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: "condition",
      title: "Device condition",
      type: "string",
      options: {
        list: ["excellent", "good", "fair", "broken"],
      },
    }),
    defineField({
      name: "expectedPrice",
      title: "Expected price (BDT)",
      type: "number",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
      description: "For product inquiries",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 4,
      validation: (rule) => rule.max(2000),
    }),
    defineField({
      name: "createdAt",
      title: "Created at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "customerName",
      subtitle: "phone",
    },
  },
});
