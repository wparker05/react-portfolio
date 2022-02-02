export function validateEmail(email) {
    const check = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return check.test(String(email).toLowerCase());
  }