import "./Product.css"
function Product({ title, price=2999 ,features}) {

// map function
let newarray=features.map((feature)=>{
    return <li>{feature}</li>
})

    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
            <p> Features of Product</p>
                
                    {/* <ul>
                        {newarray}
                    </ul> */}


                    <ul>
                        {
                            features.map((feature)=>{
                                return <li>{feature}</li>
                            })
                        }
                    </ul>
        </div>
    );
}

export default Product;



{/* <ul>
                    <li>{features[0]}</li>
                    <li>{features[1]}</li>
                    <li>{features[2]}</li>
                </ul> */}
            
            {/* Now we know we have 3 features, if there are many features , we can extract using "map" (array ftn) function  */}