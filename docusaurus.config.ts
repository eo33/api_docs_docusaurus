import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "My Site",
  tagline: "OpenAPIs are cool",
  favicon: "img/logo192.png",

  // Set the production url of your site here
  url: "https://docs4.thefurniturebros.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "eo33", // Usually your GitHub org/user name.
  projectName: "openapidocs", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
          editUrl: "https://github.com/eo33/api_docs_docusaurus/blob/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "monthly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          Account: {
            specPath: "oas/account.yaml",
            outputDir: "docs/API/account",
            sidebarOptions: {
              sidebarCollapsible: false,
            },
          },
          Address: {
            specPath: "oas/address.yaml",
            outputDir: "docs/API/address",
            sidebarOptions: {
              sidebarCollapsible: false,
            },
          },
          Cart: {
            specPath: "oas/cart.yaml",
            outputDir: "docs/API/cart",
            sidebarOptions: {
              sidebarCollapsible: false,
            },
          },
          Orders: {
            specPath: "oas/orders.yaml",
            outputDir: "docs/API/orders",
            sidebarOptions: {
              sidebarCollapsible: false,
            },
          },
          Product: {
            specPath: "oas/product.yaml",
            outputDir: "docs/API/product",
          },
          Statistics: {
            specPath: "oas/statistics.yaml",
            outputDir: "docs/API/statistics",
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "The Furniture Bros API docs",
      logo: {
        alt: "My Site Logo",
        src: "img/logo192.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "API Reference",
        },
        {
          href: "https://github.com/eo33/api_docs_docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "API reference",
              to: "/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/eo33/api_docs_docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TFB OpenAPI docs`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
