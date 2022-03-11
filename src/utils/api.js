export const getMarketoForm = () => {
  if (typeof window === "undefined" || !window.MktoForms2) return null

  return window.MktoForms2
}

export const getChiliPiper = () => {
  if (typeof window === "undefined" || !window.ChiliPiper) return null

  return window.ChiliPiper
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
