export const getMarketoForm = () => {
  if (typeof window === "undefined" || !window.MktoForms2) return null

  return window.MktoForms2
}

export const getSkills = () =>
  fetch(
    "https://https://dev.ejimford.com/andela/signup/api.php?route=get-skills-random&limit=50"
  )
