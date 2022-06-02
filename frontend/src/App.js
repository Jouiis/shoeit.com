import data from "./data";

function App() {
    return (<div>
        <header>
            <section className={'section-header'}>
                <div className={'header-wrapper'}>
                    <div className={'container'}>
                        <a href={'/'}>Shoe !t</a>
                    </div>
                </div>
            </section>
        </header>

        <main>
            <section className={'section-products'}>
                <div className={'container'}>
                    <h1>Featured Products</h1>
                    <div className={'products-wrapper'}>
                        {data.products.map(product => (<div className={'products-wrapper__item'} key={product.slug}>
                            <a href={`/product/${product.slug}`}>
                                <img src={product.image} alt={product.name}/>
                            </a>
                            <div className={'products-wrapper__item__info'}>
                                <a href={`/product/${product.slug}`}>
                                    <p>{product.name}</p>
                                </a>
                                <p>{product.price} €</p>
                                <button>Add to cart</button>
                            </div>
                        </div>))}
                    </div>
                </div>
            </section>
        </main>
    </div>);
}

export default App;
