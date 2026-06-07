

import Product from './Product.jsx';

function ProductTab() {
//products have multile/many props
let features=["Fast","Affordable","Durable"]

    return (
        <>
            <Product title="Nokia" price="2000" features={features}/>
            <Product title="Samsung" price="3000" features={features}/>
            <Product title="Oppo" features={features}/>
        </>
    );
}

export default ProductTab;