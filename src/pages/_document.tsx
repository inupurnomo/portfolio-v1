import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.cdnfonts.com/css/sf-mono" rel="stylesheet" />
      <link href="https://fonts.cdnfonts.com/css/calibre" rel="stylesheet" />

      <Head />
      <body className="scrollbar-thin scrollbar-thumb-gray-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
