import React from 'react'
import ProductItem from './ProductItem'
import './ProductList.css';

export default function ProductList(props) {
    return (
        <div className="container mb-5">
            <div className="row">        
                {props.products.map((product) => 
                    <ProductItem key={product._id}
                        id={product._id}
                        name={product.name}
                        brand={product.brand}
                        image={product.image}
                        price={product.price}
                    />
                )}
            </div>
        </div>
    )
}

        
            // <div>
            //     <div className="container mt-3">
            //     <div className="row">
            //         <div className="col-md-6 col-lg-4 mt-5 pr-2">
            //         </div>
            //         <br/>
            //         <div className="col-md-6 col-lg-4 mt-5 pr-2">
            //             <div class="card" style={{"width": "18rem"}}>
            //                 <img class="card-img-top" src="https://images.sg.content-cdn.io/cdn//in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK618925-010L.jpg" alt="Card image cap"/>
            //                 <hr/>
            //                 <div class="card-body">
            //                     <h5 class="card-title">Polo T-shirt</h5>
            //                     <h6 class="card-subtitle mb-2 text-muted">Nike</h6>
            //                     <p class="card-text">Price: 1200/- INR</p>
            //                 </div>
            //             </div>
            //         </div>
            //         <br/>
            //         <div className="col-md-6 col-lg-4 mt-5 pr-2">
            //             <div class="card" style={{"width": "18rem"}}>
            //                 <img class="card-img-top" src="https://images.sg.content-cdn.io/cdn//in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK618925-010L.jpg" alt="Card image cap"/>
            //                 <hr/>
            //                 <div class="card-body">
            //                     <h5 class="card-title">Polo T-shirt</h5>
            //                     <h6 class="card-subtitle mb-2 text-muted">Nike</h6>
            //                     <p class="card-text">Price: 1200/- INR</p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="col-md-6 col-lg-4 mt-5 pr-2">
            //             <div class="card" style={{"width": "18rem"}}>
            //                 <img class="card-img-top" src="https://images.sg.content-cdn.io/cdn//in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/ProductImages/Source/NK618925-010L.jpg" alt="Card image cap"/>
            //                 <hr/>
            //                 <div class="card-body">
            //                     <h5 class="card-title">Polo T-shirt</h5>
            //                     <h6 class="card-subtitle mb-2 text-muted">Nike</h6>
            //                     <p class="card-text">Price: 1200/- INR</p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            // </div>
//         )
//     }
// }
