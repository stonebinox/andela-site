/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script key={1} src="//hire.andela.com/js/forms2/js/forms2.min.js" />,
    <script
      key={2}
      src="//js.chilipiper.com/marketing.js"
      type="text/javascript"
      async
    />,
    <script
      key={3}
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];`,
      }}
    />,
    <script
      key={4}
      dangerouslySetInnerHTML={{
        __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4NJ25N');
  `,
      }}
    />,
    <script
      key={5}
      src="//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    />,
    <script
      key={6}
      src="//app.sendsafely.com/js/external/SendSafelyDropzone.min.js"
    />,
  ])
}
