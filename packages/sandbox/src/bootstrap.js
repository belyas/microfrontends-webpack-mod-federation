import ReactDOM from 'react-dom';
import { render } from 'products/bootstrap';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));

render(document.querySelector('#products-list'));
