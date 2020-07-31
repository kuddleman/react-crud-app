import React, { Component } from 'react'

class AddProduct extends Component {

  constructor( props ) {
    super( props ) 
    this.onSubmit = this.onSubmit.bind( this )
    
  }

  onSubmit( event ) {
    event.preventDefault()
    this.props.onAdd( this.nameInput.value, this.priceInput.value )
  }

  render(){
    return (
       <form onSubmit={ this.onSubmit }>
         <h3>Add product</h3>
         <input type="text" 
                placeholder="Name of Product" 
                ref={nameInput => this.nameInput = nameInput}
        />
         <input type="text" 
                placeholder="Product price" 
                ref={priceInput => this.priceInput = priceInput}
        />
         <button>Add Product</button>
         <hr/>
       </form>
    )
  }
}

export default AddProduct