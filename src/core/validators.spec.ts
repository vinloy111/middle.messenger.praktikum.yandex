import { expect } from 'chai';
import {
  login, password, name, email, phone, required,
} from './validators.ts';

describe('Validators', () => {
  describe('login()', () => {
    it('должен возвращать ошибку для короткого логина', () => {
      expect(login('ab')).to.equal('Длина логина должна быть от 3 до 20 символов');
    });

    it('должен возвращать ошибку для длинного логина', () => {
      const longLogin = 'a'.repeat(21);
      expect(login(longLogin)).to.equal('Длина логина должна быть от 3 до 20 символов');
    });

    it('должен возвращать ошибку для логина, состоящего только из цифр', () => {
      expect(login('123456')).to.equal('Неверный формат логина');
    });

    it('должен возвращать пустую строку для корректного логина', () => {
      expect(login('user123')).to.equal('');
    });
  });

  describe('password()', () => {
    it('должен возвращать ошибку для короткого пароля', () => {
      expect(password('Ab1')).to.equal('Длина пароля должна быть от 8 до 40 символов');
    });

    it('должен возвращать ошибку для пароля без заглавной буквы', () => {
      expect(password('abcdefg1')).to.equal('Пароль должен содержать хотя бы одну заглавную букву');
    });

    it('должен возвращать ошибку для пароля без цифры', () => {
      expect(password('Abcdefgh')).to.equal('Пароль должен содержать хотя бы одну цифру');
    });

    it('должен возвращать пустую строку для корректного пароля', () => {
      expect(password('Abcdefgh1')).to.equal('');
    });
  });

  describe('name()', () => {
    it('должен возвращать ошибку для неверного формата имени', () => {
      expect(name('john')).to.equal('Неверный формат имени или фамилии');
    });

    it('должен возвращать пустую строку для корректного имени', () => {
      expect(name('John')).to.equal('');
    });
  });

  describe('email()', () => {
    it('должен возвращать ошибку для неверного формата email', () => {
      expect(email('john.doe')).to.equal('Неверный формат email');
    });

    it('должен возвращать пустую строку для корректного email', () => {
      expect(email('john.doe@example.com')).to.equal('');
    });
  });

  describe('phone()', () => {
    it('должен возвращать ошибку для неверного формата номера телефона', () => {
      expect(phone('1234abc')).to.equal('Неверный формат номера телефона');
    });

    it('должен возвращать пустую строку для корректного номера телефона', () => {
      expect(phone('+12345678901')).to.equal('');
    });
  });

  describe('required()', () => {
    it('должен возвращать ошибку для пустого значения', () => {
      expect(required('')).to.equal('Обязательное поле');
    });

    it('должен возвращать пустую строку для не пустого значения', () => {
      expect(required('value')).to.equal('');
    });
  });
});
