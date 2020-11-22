import ProductsList from './components/products-list';

const App = () => (
  <section className="products">
      <div className="section-title">
          <h2>Latest products</h2>
      </div>
    <div className="products-center">
      <ProductsList />
    </div>
  </section>
);

export default App;
