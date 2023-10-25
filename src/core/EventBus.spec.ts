import { expect } from 'chai';
import sinon from 'sinon';
import EventBus from './EventBus.ts';

/* eslint-disable no-unused-expressions */
describe('EventBus', () => {
  let eventBus: EventBus;

  beforeEach(() => {
    eventBus = new EventBus();
  });

  describe('Метод on', () => {
    it('должен добавлять слушателя события', () => {
      const callback = sinon.fake();
      eventBus.on('test_event', callback);
      eventBus.emit('test_event');
      expect(callback.called).to.be.true;
    });
  });

  describe('Метод off', () => {
    it('должен удалять слушателя события', () => {
      const callback = sinon.fake();
      eventBus.on('test_event', callback);
      eventBus.off('test_event', callback);
      eventBus.emit('test_event');
      expect(callback.called).to.be.false;
    });

    it('должен выбрасывать ошибку при попытке удаления слушателя несуществующего события', () => {
      const callback = sinon.fake();
      expect(() => eventBus.off('non_existent_event', callback)).to.throw('Нет события: non_existent_event');
    });
  });

  describe('Метод emit', () => {
    it('должен вызывать слушателей события', () => {
      const callback1 = sinon.fake();
      const callback2 = sinon.fake();
      eventBus.on('test_event', callback1);
      eventBus.on('test_event', callback2);
      eventBus.emit('test_event');
      expect(callback1.called).to.be.true;
      expect(callback2.called).to.be.true;
    });

    it('должен передавать аргументы слушателям', () => {
      const callback = sinon.fake();
      eventBus.on('test_event_with_args', callback);
      eventBus.emit('test_event_with_args', 'arg1', 'arg2');
      expect(callback.calledWith('arg1', 'arg2')).to.be.true;
    });

    it('не должен вызывать ошибку, если нет слушателей для события', () => {
      expect(() => eventBus.emit('non_existent_event')).to.not.throw();
    });
  });
});
