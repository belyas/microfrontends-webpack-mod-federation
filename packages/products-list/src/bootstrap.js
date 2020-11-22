import ReactDOM from 'react-dom';
import App from './App';

export const render = (nodeElement) => {
  if (!nodeElement) {
    nodeElement = document.createElement('div');
    nodeElement.id = '#products-list';
    document.body.appendChild(nodeElement);
  }

  ReactDOM.render(<App />, nodeElement);
};

if (process.env.NODE_ENV === 'development') {
  const localDevNode = document.querySelector('#local-products-list');

  if (localDevNode) {
    render(localDevNode);
  }
}
