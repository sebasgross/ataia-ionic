import React, { Component } from 'react'
import axios from 'axios'
// import { withStyles } from '@material-ui/core/styles';
import {Input,Button} from '@material-ui/core'



class ProductForm extends Component{
    state={
        product:{}
    }
    eventHandler=(e)=>{
        let {product} = this.state
        product[e.target.name] = e.target.value

        this.setState({ product })
        console.log(product)
    }
    sendToServer=()=>{
        let {product} = this.state
        let url = "https://prueba-aitai.herokuapp.com/product/create"

        axios.post(url,product, {withCredentials:false},{ crossDomain: true})
        .then(()=>{
            // console.log(user)
            this.props.history.push('/product/all')
        })
        .catch(e=>console.log(e))

    }
    render(){
        // const {product}= this.state
    
        return(
            <div className="main-container">
            <div className="main-card">
                <Input className="inputs" onChange={this.eventHandler} name="name" type="text" placeholder="Name of Product">
                </Input>



                <Input className="inputs" onChange ={this.eventHandler} name="quantity" type="number" min="0" max="100" placeholder="How Many Units">
                </Input>
                <Button variant="contained" onClick={this.sendToServer} component="span" >
                    Upload
                    </Button>
                
            </div>
            </div>
        )
    }
}

export default ProductForm
