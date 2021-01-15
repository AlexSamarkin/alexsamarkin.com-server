export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    cors: process.env.NODE_ENV === 'production',
    origin: 'https://alexsamarkin.com',
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
    graphCMSToken: process.env.GRAPH_CMS_TOKEN,
    graphCMS: 'https://api-eu-central-1.graphcms.com/v2/ckhc9fzfu5fyk01yzg6oo5dxq/master'
});