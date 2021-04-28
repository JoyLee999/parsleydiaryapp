export function passwordValidator(password) {
  if (!password) return "Can't empty the password field."
  if (password.length < 5) return 'Password must be longer than 5 characters.'
  return ''
}
