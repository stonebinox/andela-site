export const getMarketoForm = () => {
  if (typeof window === "undefined" || !window.MktoForms2) return null

  return window.MktoForms2
}

export const getChiliPiper = () => {
  if (typeof window === "undefined" || !window.ChiliPiper) return null

  function q(a) {
    return function () {
      window.ChiliPiper[a].q = (window.ChiliPiper[a].q || []).concat([
        arguments,
      ])
    }
  }

  window.ChiliPiper =
    window.ChiliPiper ||
    "submit scheduling showCalendar submit widget bookMeeting"
      .split(" ")
      .reduce((a, b) => {
        a[b] = q(b)

        return a
      }, {})

  window.ChiliPiper.scheduling("andela", "Inbound-Router-wizard", {
    map: true,
  })

  return window.ChiliPiper
}

export const getGtag = () => {
  if (typeof window === "undefined" || !window.dataLayer) return null

  window.dataLayer = window.dataLayer || []

  function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag = gtag

  gtag("js", new Date())
  gtag("config", "UA-54977360-1")

  return window.gtag
}

export const getSkills = () =>
  fetch(
    "//dev.ejimford.com/andela/signup/api.php?route=get-skills-random&limit=20"
  )

export const searchSkills = text =>
  fetch(
    `//dev.ejimford.com/andela/signup/api.php?route=search&text=${encodeURIComponent(
      text
    )}`
  )

// export const setZoomInfo = () => {
//   if (typeof window === "undefined") return null

//   window._zi = {
//     formId: "bf1bffd3-512e-4f22-a1f9-232871a47631",
//     formLoadTimeout: 4000,
//     callbacks: {
//       onReady: data => {
//         console.log("ready", data)
//       },
//       onMatch: data => {
//         console.log("match", data)
//       },
//     },
//   }

//   var zi = document.createElement("script")
//   zi.type = "text/javascript"
//   zi.async = true
//   zi.src = "//ws-assets.zoominfo.com/formcomplete.js"
//   var s = document.getElementsByTagName("script")[0]
//   s.parentNode.insertBefore(zi, s)
// }