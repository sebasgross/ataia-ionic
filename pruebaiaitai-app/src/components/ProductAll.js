import React, { Component } from 'react'
import axios from 'axios'



class ProductList extends Component{
    state={
        products: []
    }

    componentDidMount(){
        let url = "https://prueba-aitai.herokuapp.com/product/all"
        axios.get(url,{withCredentials:false})
        .then(p=>{
            // console.log("aqui es ", p)
        this.setState({products:[p.data]})
        
        })
        .catch(e=>console.log(e))
    }

    render(){
        const {products}= this.state
        console.log(products[0])
        if(products.length === 0) return<div>Loading...</div>
        return(
            <div className="product-container"> 
                {products[0].map((product,index)=>{
                    console.log(product)
                    return(
                        <div key={index} className="product-card">
                        <p>Product Name: <b>{product.name}</b></p>
                        <p>Quantity: <b>{product.quantity}</b></p>
                        </div>
                    )
                })}
            </div>
        )
                } 
            }

export default ProductList
