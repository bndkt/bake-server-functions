import type { FunctionComponent } from "renku";

import "../styles.css";

const Layout: FunctionComponent<{
  _renku: { styles: string[]; modules: string[] };
}> = ({ children, _renku }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Renku</title>
        {_renku.styles.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        {_renku.modules.map((src) => (
          <script key={src} type="module" src={src} async />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
