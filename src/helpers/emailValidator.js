export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Can't empty the email field."
  if (!re.test(email)) return 'Sorry! We already have this email.'
  return ''
}
