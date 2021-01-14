export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    cors: process.env.NODE_ENV === 'production',
    mail: {
        smtp: "smtp.yandex.ru",
        smtpPort: 465,
        from: process.env.TO_EMAIL,
        to: process.env.FROM_EMAIL,
        smtpYandexUser: process.env.SMTP_YANDEX_AUTH_USER,
        smtpYandexPassword:  process.env.SMTP_YANDEX_PASSWORD
    },
    telegram: {
        token: process.env.TELEGRAM_TOKEN,
        chatId: process.env.TELEGRAM_CHAT_ID
    },
    isDev: process.env.NODE_ENV === 'development',
    graphCMSToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDUwMzU4MDYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NraGM5ZnpmdTVmeWswMXl6ZzZvbzVkeHEvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOGE3YTRmMTUtZjFiMS00ZGJjLTllNjAtODg5MWU2MmUyNmZkIiwianRpIjoiY2toY2N2bWhqN3hlaDAxd2VhanNzNnY1MCJ9.2zdFz-P3HVRj87dkm8ZUG3iuNq9dFLwBORg3oaF-3AsS4PM9B8dZJ-X3Z36_IezeJQ9cdFl2l25c8kaJw3F6_dyAryjXS5uTk_RIe1wCDvzMftYvw4XJi7V3jF3wjFxYEjjdFVOta3hgyLGt6_Cl5xpMVuX7N3wYl627l-pLKtISzSrWlKCcNLZUhoEYo9vp-ZKgx9ZiSjdDeA8NnguVpHhQ7mfwlD2ibJr5uH34TS56Q17Hw5u5d02ozBXVyHFxm8Xfr4nVyAqap-XqZmDwdazaGpuUdFJtQMYy9ydjQ8uliaej4YddhUphQsOKeLmKjjODPnvnzjk8Jj-39VPqhiFQt1dAFDSYtwBiuQhFZ16Z2UtKwd7qPdb8y1fW59dJ9JtVgiYplvUJOXN3JOOIyet8oN4GYl5H9Xv8MgvmSkl9x6sWGUhhTn0ph93VcOAnKJKUvey6lw9uoN9qq2y-7RKN7f-ale7ogqehAh7rlg3meXhzhI7OtvFVMosecSRlME_K2UXUaujkioQ9lly7MKRzktZWoRT0GjAKb5Dr37WItSrpG7j2AmJDYhSQIghPi_sbzjQlD3py7JOF_9ilxHJCooANrp5lCXqcDYnEN7Cy_vhKSM6cgXGWYrzUIcx0o4wIJcoH7ElkORXxiDifI38sml_jIWfLWYlEfNaWPyg',
    graphCMS: 'https://api-eu-central-1.graphcms.com/v2/ckhc9fzfu5fyk01yzg6oo5dxq/master'
});