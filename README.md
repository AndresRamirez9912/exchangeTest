This is an implementation template meant as a launching point for client customizations that utilize AlphaPoint APIs and Apex-Web components.

## Table of Contents
- [Configuration](#configuration)
- [Branding](#branding)
- [Themes](#themes)
- [Logo](#logo)
- [Product Icons](#product-icons)
- [Navigation](#navigation)

## Configuration
Many behaviors of the `apex-web` library can be controlled without code-change by modifying the configuration [file](/public/local/config.js): `public/local/config.js`.
Further documentation is available [here](https://alphapoint.atlassian.net/wiki/spaces/ReleaseNotes/pages/813662512/APEX+Web+v3+Front+End+Customizations).

## Branding

#### Removing any mention of AlphaPoint
- customize the logo in the [Header](/src/layouts/PageHeaderLayout/PageHeaderLayout.js): `src/layouts/PageHeaderLayout/PageHeaderLayout.js`.
- create a custom Footer, and use it on a [Page](/src/pages/DashboardPage.js): `src/pages/DashboardPage.js`.

## Themes

By default, the project should include a light and dark theme.
- [Dark](/src/styles/theme/dark.css): `src/styles/theme/dark.css`.
- [Light](/src/styles/theme/light.css): `src/styles/theme/light.css`.

In addition, there is the file of [variables](/src/styles/theme/variables.css):
- `src/styles/theme/variables.css`.

The variables file is used to reference CSS variables, which are assigned values in the individual theme files.
Creating additional themes is also possible.

## Logo

- customize the logo in the [Header](/src/layouts/PageHeaderLayout/PageHeaderLayout.js): `src/layouts/PageHeaderLayout/PageHeaderLayout.js`.

## Product Icons

- The product icons are located in the following directory: `public/local/product-icons/`.
- The icons are registered via inclusion [here](/public/local/product-manifest.json): `public/local/product-manifest.json`.
- The "product color" is the color of the accent bar above the logo.
- The following format is required:
```js
{
  "PRODUCT_SYMBOl": { "iconFileName": **$file_name**, "productColor": "#FFFFFF" } 
}
```

## Navigation

Adding new pages:
- Add the link in the [Header](/src/layouts/PageHeaderLayout/PageHeaderLayout.js): `src/layouts/PageHeaderLayout/PageHeaderLayout.js`.
- Register the Route for the new "Page" [here](/src/pages/InteriorPage.js): `src/pages/InteriorPage.js`.

Customizing dropdown menu:
- src/components/UserSummary/UserSummaryComponent.js

"Settings" sidebar menu:
- Add the item to the [menu](/src/components/SettingsMenu/SettingsMenuComponent.js): `src/components/SettingsMenu/SettingsMenuComponent.js`.
- Register the Route for the new Settings [Page](/src/pages/UserSettingsPage.js): `src/pages/UserSettingsPage.js`.
