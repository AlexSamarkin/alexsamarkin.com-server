export default `
{
  posts(orderBy: createdAt_DESC) {
    title,
    slug,
    thumb {
      url
    },
    excerpt,
    createdAt
  }
}
`;