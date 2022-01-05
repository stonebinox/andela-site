import * as React from "react"
import { Link } from "gatsby"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useUrlsAndTitles } from "../utils/api"

const IndexPage = () => {
  const urls = useUrlsAndTitles()

  const parseData = data => {
    const { urlNodes, imageNodes, titleNodes } = data
    const {
      banner: {
        file: { url: imageUrl },
      },
    } = imageNodes[0]
    const { url } = urlNodes[0]

    return (
      <div>
        <img src={imageUrl} border="0" width="90%" />
        <br />
        <a href={url} target="_blank">
          Link
        </a>
        {titleNodes.map(title => {
          const {
            title: { raw },
          } = title

          return (
            <p
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(JSON.parse(raw)),
              }}
            />
          )
        })}
      </div>
    )
  }

  return (
    <Layout>
      <Seo title="Home" />
      <p>
        <Link to="/static-page-1/">Go to "Static page 1"</Link>
        {/*<Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link> */}
      </p>
      {parseData(urls)}
    </Layout>
  )
}

export default IndexPage
