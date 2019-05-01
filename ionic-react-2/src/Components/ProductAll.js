import React, { Component } from 'react'
import { IonCard, IonCardContent, IonCardHeader } from '@ionic/react'


import axios from 'axios'



class ProductList extends Component{
    state={
        products: []
    }

    componentDidMount(){
        let url = "http://localhost:3000/product/all"
        axios.get(url,{withCredentials:false})
        .then(p=>{
        this.setState({products:[p.data]})
        
        })
        .catch(e=>console.log(e))
    }

    render(){
        const {products}= this.state
        if(products.length === 0) return<div>Loading...</div>
        return(
            <div>
            <div className="product-container"> 
                {products[0].map((product,index)=>{
                    console.log(product)
                    return(
                        <div>
                        <IonCard>
                            <IonCardHeader  key={index}>
                                <p>Product Name: <b>{product.name}</b></p>
                            </IonCardHeader>
                            <IonCardContent>
                                 <p>Quantity: <b>{product.quantity}</b></p>                                
                            </IonCardContent>
                            </IonCard>

                    </div>
                    )
                })}
            </div>
            </div>
        )
                } 
            }

export default ProductList