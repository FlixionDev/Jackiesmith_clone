import React from 'react'

export default function ProductDescription() {
    var productDescription=JSON.parse(localStorage.getItem("productDescription")) || [];
    const [state,setState]=React.useState(productDescription)
    console.log(state)
  return (
    <div>

    </div>
  )
}
