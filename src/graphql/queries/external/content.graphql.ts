export default
`
{
  jobs(orderBy: id_ASC) {
    title
    toYear
    fromYear
    description
  }
  cv(where: {id: "ckhcfgeag0t1z0a00y8xng2ar"}) {
    cv {
      url
    }
  }
  aboutTexts {
    text
  }
  courses(orderBy: id_ASC) {
    title
    fromYear
    toYear
    description
  },
  navs {
    title,
    link
  },
  texts {
    backend,
    frontend
  }
}
`;