import { defaultTheme, defineUserConfig } from "vuepress"

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "AiXinGe",
    description: "让消息推送不再复杂",
    head: [
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: `/images/icons/favicon-16x16.png`
            }
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: `/images/icons/favicon-32x32.png`
            }
        ],
        ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
        ["meta", { name: "application-name", content: "AiXinGe" }],
        ["meta", { name: "apple-mobile-web-app-title", content: "AiXinGe" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" }
        ],
        [
            "link",
            { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` }
        ],
        [
            "link",
            {
                rel: "mask-icon",
                href: "/images/icons/safari-pinned-tab.svg",
                color: "#0884ff"
            }
        ],
        ["meta", { name: "msapplication-TileColor", content: "#0884ff" }],
        ["meta", { name: "theme-color", content: "#0884ff" }]
    ],
    theme: defaultTheme({
        logo: '/images/logo.png',
        repo: 'aixinge/aixinge',
        docsDir: 'docs',
    })
})
