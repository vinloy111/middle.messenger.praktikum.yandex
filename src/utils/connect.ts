import Block from '../core/Block.ts';
import { StoreEvents } from '../core/Store.ts';
import { AppState } from '../models/app-state.ts';
import isEqual from './isEqual.ts';

export function connect(mapStateToProps: (state: AppState) => Partial<AppState>) {
  return function<P extends Record<string, any>> (Component: new (props: P) => Block<P>) {
    return class ConnectedComponent extends Component {
      static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_CWU: 'flow:component-will-unmount',
        FLOW_RENDER: 'flow:render',
      };

      private onChangeStoreCallback: () => void;

      constructor(props: P) {
        const { store } = window;
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        this.onChangeStoreCallback = () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          state = newState;
        };

        store.on(StoreEvents.Updated, this.onChangeStoreCallback);
      }

      componentWillUnmount() {
        super.componentWillUnmount();
        window.store.off(StoreEvents.Updated, this.onChangeStoreCallback);
      }
    };
  };
}
