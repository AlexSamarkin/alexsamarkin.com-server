export default (slug: string) => `
    {
      post(where: {
        slug: "${slug}"
      }) {
        title,
        excerpt,
        thumb {
           url
        },
        createdAt,
        slug,
        content
      }
    }
`;