class WebSocketService {
  private socket: WebSocket | null = null;

  connect(url: string) {
    if (this.socket) {
      this.close();
      window.store.set({ messages: [] });
    }

    this.socket = new WebSocket(url);

    this.socket.addEventListener('open', () => {
      console.log('WebSocket connection established');

      webSocketService.sendMessage({
        content: '0',
        type: 'get old',
      });
    });

    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Clean connection close');
      } else {
        console.log('Connection abrupt close');
      }
      console.log(`Code: ${event.code} | Reason: ${event.reason}`);
    });

    this.socket.addEventListener('message', (event) => {
      const preparedData = JSON.parse(event.data);
      const prevData = window.store.getState().messages;

      if (Array.isArray(preparedData)) {
        window.store.set({
          messages: prevData
            ? [...preparedData, ...prevData]
            : preparedData,
        });
      } else {
        window.store.set({ messages: prevData ? [preparedData, ...prevData] : preparedData });
      }
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Error', event);
    });
  }

  sendMessage(message: any) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.error('Socket is not open. Cannot send message.');
    }
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }
}

const webSocketService = new WebSocketService();
export {
  webSocketService,
};
