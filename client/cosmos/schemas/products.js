export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      of: [{type: 'image'}],
      options: {hotspot: true},
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'decription',
      title: 'Decription',
      type: 'string',
    },
  ],
}
