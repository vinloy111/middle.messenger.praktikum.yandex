import { expect } from 'chai';
import sinon from 'sinon';
import { Router } from './Router.ts';
import Block from './Block.ts';

/* eslint-disable no-unused-expressions */
describe('Router', () => {
  let router: Router;
  const rootQuery = 'test';
  let onRouteSpy: sinon.SinonSpy;

  beforeEach(() => {
    router = Router.getInstance(rootQuery);
  });

  afterEach(() => {
    onRouteSpy?.restore();
  });

  describe('use', () => {
    it('должен добавлять новый маршрут', () => {
      class TestComponent extends Block<Record<string, any>> {
        render() {
          return ('<div>Test</div>');
        }
      }
      router.use('/test', TestComponent);
      const route = router.getRoute('/test');
      expect(route).to.exist;
    });
  });

  describe('start', () => {
    it('должен активировать текущий маршрут при старте', () => {
      onRouteSpy = sinon.spy(router, '_onRoute');
      router.start();
      expect(onRouteSpy.calledWith(window.location.pathname)).to.be.true;
    });
  });

  describe('Методы навигации', () => {
    beforeEach(() => {
      sinon.stub(window.history, 'pushState');
      sinon.stub(window.history, 'back');
      sinon.stub(window.history, 'forward');
    });

    afterEach(() => {
      (window.history.pushState as sinon.SinonStub).restore();
      (window.history.back as sinon.SinonStub).restore();
      (window.history.forward as sinon.SinonStub).restore();
    });

    it('back должен вызывать предыдущую запись в истории', () => {
      router.back();
      expect((window.history.back as sinon.SinonStub).calledOnce).to.be.true;
    });

    it('forward должен вызывать следующую запись в истории', () => {
      router.forward();
      expect((window.history.forward as sinon.SinonStub).calledOnce).to.be.true;
    });
  });
});
