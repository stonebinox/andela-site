import { useEffect } from "react"

const RedirectPage = () => {
  const redirectToOldForm = () => {
    if (typeof window === "undefined") {
      setTimeout(() => {
        redirectToOldForm()
      }, 500)
    }

    window.location = "http://andela.com/hire-talent"
  }

  useEffect(() => {
    redirectToOldForm()
  }, [])
  return null
}

export default RedirectPage
