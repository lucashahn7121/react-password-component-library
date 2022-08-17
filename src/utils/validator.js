export const checkPasswordValues = (pwd) => {
  
  const fError = {
    first: '',
    confirm: '',
    isError: false,
  }
  const pwd1 = pwd.first;
  const pwd2 = pwd.confirm;

  if (!pwd1.length) {
    fError.isError = true;
    fError.first = 'Please enter your password';
  }

  if (!pwd2.length) {
    fError.isError = true;
    fError.confirm = 'Please enter your password';
  } else if (!pwd1.length) {
    fError.isError = true;
    fError.confirm = '';
  } else if (pwd1 !== pwd2) {
    fError.isError = true;
    fError.confirm = `Those passwords didn't match. Try again!`;
  } else if (pwd2.length < 6) {
    fError.isError = true;
    fError.confirm = 'Use 6 or more characters for your password';
  }  else if (!/[a-z]/.test(pwd2)) {
    fError.isError = true;
    fError.confirm = `At least 1 lowercase character is required.`;
  } else if (!/[A-Z]/.test(pwd2)) {
    fError.isError = true;
    fError.confirm = `At least 1 uppercase character is required.`;
  } else if (!/\d/.test(pwd2)) {
    fError.isError = true;
    fError.confirm = `At least 1 number is required.`;
  } else if (!/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(pwd2)) {
    fError.isError = true;
    fError.confirm = `At least 1 special character is required.`;
  }

  if (fError.isError) return fError;
  return null;
}