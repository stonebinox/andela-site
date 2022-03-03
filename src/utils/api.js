export const getMarketoForm = () => {
  if (typeof window === "undefined" || !window.MktoForms2) return null

  return window.MktoForms2
}
