import React, { Component } from 'react'
import axios from 'axios'
import { IonApp, IonCard} from '@ionic/react'
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

    }
    sendToServer=()=>{
        let {product} = this.state
        let url = "http://localhost:3000/product/create"

        axios.post(url,product, {withCredentials:false},{ crossDomain: true})
        .then(()=>{
            this.props.history.push('/')
        })
        .catch(e=>console.log(e))

    }
    render(){

        return(
            <IonApp>
            <div className="main-container">
            <IonCard className="main-card">
                <Input className="inputs" onChange={this.eventHandler} name="name" type="text" placeholder="Name of Product">
                </Input>
                <Input className="inputs" onChange ={this.eventHandler} name="quantity" type="number" min="0" max="100" placeholder="How Many Units">
                </Input>
                <Button variant="contained" onClick={this.sendToServer} id="button-submit" component="span" >
                    Upload
                    </Button>
                
            </IonCard>
            </div>
            </IonApp>
        )
    }
}

export default ProductForm