import React from "react"
import { AlternatingSection } from "../components/alternating-section/alternating-section"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../utils/common.styles"

const StaticPage1 = () => {
  const sections = [
    {
      content: "Some content",
      image:
        "https://images.unsplash.com/photo-1641232264778-db24c9a88cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4770&q=80",
    },
    {
      content: "Some content",
      image:
        "https://images.unsplash.com/photo-1641232264778-db24c9a88cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4770&q=80",
    },
    {
      content: "Some content",
      image:
        "https://images.unsplash.com/photo-1641232264778-db24c9a88cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4770&q=80",
    },
    {
      content: "Some content",
      image:
        "https://images.unsplash.com/photo-1641232264778-db24c9a88cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4770&q=80",
    },
    {
      content: "Some content",
      image:
        "https://images.unsplash.com/photo-1641232264778-db24c9a88cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4770&q=80",
    },
  ]

  return (
    <Layout>
      <Seo title="Some page" />
      <Hero />
      <AlternatingSection sections={sections} />
    </Layout>
  )
}

export default StaticPage1
