import {
  InitGymValidForm
} from "../interfaces/gym";
import {
  emailValidator,
  minLengthValidator,
  phoneValidator,
  requiredValidator,
} from "./validators";

export const formValidate = (touchedFields, gym) => {
  const errors = InitGymValidForm();
  if (touchedFields.name) {
    const minLength = 5;
    if (requiredValidator(gym.name).isValid === false)
      errors.name = requiredValidator(gym.name).error;
    else if (minLengthValidator(gym.name, minLength).isValid === false)
      errors.name = minLengthValidator(gym.name, minLength).error;
  }

  if (touchedFields.email) {
    if (requiredValidator(gym.email).isValid === false)
      errors.email = requiredValidator(gym.email).error;
    else if (emailValidator(gym.email).isValid === false)
      errors.email = emailValidator(gym.email).error;
  }

  if (touchedFields.phone) {
    if (requiredValidator(gym.phone).isValid === false)
      errors.phone = requiredValidator(gym.phone).error;
    else if (phoneValidator(gym.phone).isValid === false)
      errors.phone = phoneValidator(gym.phone).error;
  }

  if (touchedFields.openHours) {
    const minLength = 5;
    if (requiredValidator(gym.openHours).isValid === false)
      errors.openHours = requiredValidator(gym.openHours).error;
    else if (minLengthValidator(gym.openHours, minLength).isValid === false)
      errors.openHours = minLengthValidator(gym.openHours, minLength).error;
  }

  if (touchedFields.description) {
    const minLength = 50;
    if (requiredValidator(gym.description).isValid === false)
      errors.description = requiredValidator(gym.description).error;
    else if (minLengthValidator(gym.description, minLength).isValid === false)
      errors.description = minLengthValidator(
        gym.description,
        minLength
      ).error;
  }

  if (touchedFields.province) {
    if (requiredValidator(gym.province).isValid === false)
      errors.province = requiredValidator(gym.province).error;
  }

  if (touchedFields.address) {
    const minLength = 10;
    if (requiredValidator(gym.address).isValid === false)
      errors.address = requiredValidator(gym.address).error;
    else if (minLengthValidator(gym.address, minLength).isValid === false)
      errors.address = minLengthValidator(gym.address, minLength).error;
  }

  return errors;
};
