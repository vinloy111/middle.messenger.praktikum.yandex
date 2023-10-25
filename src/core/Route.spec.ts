import { expect } from 'chai';
import sinon from 'sinon';
import { Route } from './Route.ts';
import Block from './Block.ts';

/* eslint-disable no-unused-expressions */
describe('Route', () => {
  class TestComponent extends Block<Record<string, any>> {
    render() {
      return '<div>Test</div>';
    }
  }

  const rootQuery = 'app';
  const routePath = '/test';
  let route: Route;

  beforeEach(() => {
    route = new Route(routePath, TestComponent, { rootQuery });
    sinon.stub(route, 'render');
  });

  afterEach(() => {
    (route.render as sinon.SinonStub).restore();
  });

  describe('navigate', () => {
    it('должен рендерить блок при соответствии маршрута', () => {
      route.navigate(routePath);
      expect((route.render as sinon.SinonStub).calledOnce).to.be.true;
    });

    it('не должен рендерить блок при несоответствии маршрута', () => {
      route.navigate('/another-path');
      expect((route.render as sinon.SinonStub).called).to.be.false;
    });
  });

  describe('match', () => {
    it('должен вернуть true для соответствующего маршрута', () => {
      expect(route.match(routePath)).to.be.true;
    });

    it('должен вернуть false для несоответствующего маршрута', () => {
      expect(route.match('/another-path')).to.be.false;
    });
  });
});
