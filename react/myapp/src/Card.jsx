
import "./Card.css"
function Card({title,features,oldPrice,newPrice}){
    return(
        <div className="card">
             <div className="card-body">
                <h2>{title}</h2>
                {
                    features.map((feature,index)=>{
                        return <p key={index}>{feature}</p>
                    })
                }
            
        </div>
         <div className="card-price">
            <span className="old-price">{oldPrice}</span>
            <span>{newPrice}</span>
            
        </div>

        </div>
       
    )
}

export default Card;