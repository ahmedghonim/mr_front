import { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default function Document(ctx: DocumentContext) {
  return (
    <Html dir={ctx.locale === "ar" ? "rtl" : "ltr"} lang={ctx.locale}>
      <Head>
        <title>
          مكتب محاسبة ومراجعة للاستشارات الضريبية والقانونية M1 GROUP
        </title>
        <meta
          name="keywords"
          content="محاسبون قانونيون , مراجعون, خدمات ضرائب, محاسب ضرائب, خبير ضرائب , تأسيس مؤسسه , مكتب محاسب قانوني , فض منازعات"
        />
        <meta
          name="description"
          content="مكتب محمد رزق و شركاه للمحاسبه القانونيه و الضرائب و كافه المهام الورقيه والاجراءات القانونيه مع المتابعه المستمرة وتخليص الاجراءات الحكوميه لتاسيس شركتك                     ."
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.msh.com.eg/" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="مكتب محاسبة ومراجعة للاستشارات الضريبية والقانونية M1 GROUP"
        />
        <meta
          property="og:description"
          content="تعتبر مجموعه m1 محمد رزق للمحاسبه القانونيه ، مكنب محاسبهو مراجعه رائد في مجال العمل المحاسبي و الاعمال الضريبيه تمتاز بخبره اكثر من عشره اعوام في مجال المحاسبه و المراجعه."
        />
        <meta property="og:url" content="https://www.msh.com.eg/" />
        <meta
          property="og:site_name"
          content="مكتب محاسبة و ضرائب و تأسيس شركات M1 GROUP"
        />
        <meta property="og:updated_time" content="2022-03-26T11:34:51+00:00" />
        <meta
          property="og:image"
          content="https://www.msh.com.eg/wp-content/uploads/2021/01/business-set-icons.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.msh.com.eg/wp-content/uploads/2021/01/business-set-icons.png"
        />
        <meta property="og:image:width" content="789" />
        <meta property="og:image:height" content="764" />
        <meta property="og:image:alt" content=" ضرائب و مكتب محاسبة" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="article:published_time"
          content="2023-04-20T07:23:47+00:00"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="مكتب محاسبة ومراجعة M1 GROUP للاستشارات الضريبية والقانونية"
        />
        <meta
          name="twitter:description"
          content="مكتب محمد رزق و شركاه للمحاسبه القانونيه و الضرائب وكافه المهام الورقيه والاجراءات القانونيه مع المتابعه المستمرة وتخليص الاجراءات الحكوميه لتاسيس شركتك  ."
        />
        <meta
          name="twitter:image"
          content="https://www.msh.com.eg/wp-content/uploads/2021/01/business-set-icons.png"
        />
        <meta name="twitter:label1" content="Written by Ahmed Ghonim" />
        <meta name="twitter:data1" content="admin" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
