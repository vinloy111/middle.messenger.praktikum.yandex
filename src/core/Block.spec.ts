import { expect } from 'chai';
import sinon from 'sinon';
import Block from './Block.ts';

/* eslint-disable no-unused-expressions */
describe('Block', () => {
  class TestComponent extends Block {
    protected render(): string {
      return '<div>Test</div>';
    }
  }

  it('должен создать новый экземпляр с дефолтными свойствами', () => {
    const component = new TestComponent();
    expect(component).to.be.instanceOf(Block);
    expect(component.id).to.be.a('string');
  });

  describe('Методы жизненного цикла', () => {
    let component: TestComponent;
    let componentDidMountStub: sinon.SinonStub;
    let componentDidUpdateStub: sinon.SinonStub;
    let componentWillUnmountStub: sinon.SinonStub;

    beforeEach(() => {
      component = new TestComponent();
      componentDidMountStub = sinon.stub(component, 'componentDidMount');
      componentDidUpdateStub = sinon.stub(component as any, 'componentDidUpdate');
      componentWillUnmountStub = sinon.stub(component, 'componentWillUnmount');
    });

    afterEach(() => {
      componentDidMountStub.restore();
      componentDidUpdateStub.restore();
      componentWillUnmountStub.restore();
    });

    it('должен вызывать componentDidMount', () => {
      const eventBus = (component as any).eventBus();
      eventBus.emit(Block.EVENTS.FLOW_CDM);
      expect(componentDidMountStub.calledOnce).to.be.true;
    });

    it('должен вызывать componentDidUpdate', () => {
      component.setProps({ test: 'value' });
      expect(componentDidUpdateStub.calledOnce).to.be.true;
    });

    it('должен корректно обновлять пропсы', () => {
      const { props } = component as any;
      component.setProps({ test: 'value' });
      expect(props.test).to.equal('value');
    });
  });

  describe('Методы отображения', () => {
    let component: TestComponent;

    beforeEach(() => {
      component = new TestComponent();
    });

    it('должен корректно показывать компонент', () => {
      component.show();
      expect(component.getContent()!.style.display).to.equal('block');
    });

    it('должен корректно скрывать компонент', () => {
      component.hide();
      expect(component.getContent()!.style.display).to.equal('none');
    });
  });
});
