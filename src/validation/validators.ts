function emailValidator(value: string) {
  const isValid = (value && !!value
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
  const error = !isValid ? 'Please enter a valid email' : '';
  return { isValid, error };
}

function phoneValidator(value: string) {
  const isValid = (value && !!value
    .match(/^\d{9,13}$/g));
  const error = !isValid ? 'Please enter a valid phone' : '';
  return { isValid, error };
}

function requiredValidator(value: string) {
  const isValid = (value !== undefined && value !== null && value !== '');
  const error = !isValid ? 'This field is required' : '';
  return { isValid, error };
}

function minLengthValidator(value: string, length) {
  const isValid = (value.length >= length);
  const error = !isValid ? 'Length should be at least ' + length : '';
  return { isValid, error };
}

function requiredElementsBeenTouched(elements) {
  for (let key in elements)
    if (elements[key] === false) return false;

  return true;
}

export {
  emailValidator,
  phoneValidator,
  requiredValidator,
  minLengthValidator,
  requiredElementsBeenTouched
};