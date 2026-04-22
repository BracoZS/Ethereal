export const navLinks = [
    { label: "ARCHIVE", href: "#archive" },
    { label: "TECHNE", href: "#techne" },
    { label: "COLLECTIVE", href: "#collective" },
] as const;

export const socialLinks = [
    {
        name: "twitter",
        url: "https://twitter.com",
        icon: "twitter",
        label: "Twitter"
    },
    {
        name: "instagram",
        url: "https://instagram.com",
        icon: "instagram",
        label: "Instagram"
    },
    {
        name: "facebook",
        url: "https://facebook.com",
        icon: "facebook",
        label: "Facebook"
    },
    {
        name: "youtube",
        url: "https://youtube.com",
        icon: "youtube",
        label: "YouTube"
    },
    {
        name: "discord",
        url: "https://discord.gg",
        icon: "discord",
        label: "Discord"
    },
    {
        name: "whatsapp",
        url: "https://wa.me",
        icon: "whatsapp",
        label: "WhatsApp"
    },
]

export const footerLinks = [
    {
        title: "Producto",
        links: [
            { label: "Características", href: "#features" },
            { label: "Precios", href: "#pricing" },
            { label: "Documentación", href: "/docs" },
        ],
    },
    {
        title: "Compañía",
        links: [
            { label: "Sobre nosotros", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Carreras", href: "/careers" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacidad", href: "/privacy" },
            { label: "Términos", href: "/terms" },
        ],
    },
] as const;