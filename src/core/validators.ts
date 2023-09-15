export function login(value: string) {
  if (value.length < 3 || value.length > 20) {
    return 'Длина логина должна быть от 3 до 20 символов';
  }

  const regex = /^(?![0-9]*$)[a-zA-Z0-9-_]+$/;
  if (!regex.test(value)) {
    return 'Неверный формат логина';
  }

  return '';
}

export function password(value: string) {
  if (value.length < 8 || value.length > 40) {
    return 'Длина пароля должна быть от 8 до 40 символов';
  }

  if (!/[A-Z]/.test(value)) {
    return 'Пароль должен содержать хотя бы одну заглавную букву';
  }

  if (!/[0-9]/.test(value)) {
    return 'Пароль должен содержать хотя бы одну цифру';
  }

  return '';
}

export function name(value: string) {
  const regex = /^[A-ZА-Я][a-zа-яA-ZА-Я-]*$/;
  if (!regex.test(value)) {
    return 'Неверный формат имени или фамилии';
  }
  return '';
}

export function email(value: string) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(value)) {
    return 'Неверный формат email';
  }
  return '';
}

export function phone(value: string) {
  const regex = /^(\+)?[0-9]{10,15}$/;
  if (!regex.test(value)) {
    return 'Неверный формат номера телефона';
  }
  return '';
}

export function required(value: string) {
  if (!value.trim()) {
    return 'Обязательное поле';
  }
  return '';
}
