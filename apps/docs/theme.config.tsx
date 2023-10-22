import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>@jusoren/ui</span>,
  project: {
    link: "https://github.com/jusoren/ui",
  },
  docsRepositoryBase: "https://github.com/jusoren/ui/tree/main/apps/docs",
  footer: {
    text: (
      <span>
        Brought to you by{" "}
        <a
          style={{ fontWeight: 600, textDecoration: "underline" }}
          href="https://github.com/jusoren"
          target="_blank"
        >
          Jus Oren
        </a>
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - @jusoren/ui",
    };
  },
};

export default config;
