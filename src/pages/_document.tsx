import { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default function Document(ctx: DocumentContext) {
  return (
    <Html dir={ctx.locale === "ar" ? "rtl" : "ltr"} lang={ctx.locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
