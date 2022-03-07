export const getMarketoForm = () => {
  if (typeof window === "undefined" || !window.MktoForms2) return null

  return window.MktoForms2
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
