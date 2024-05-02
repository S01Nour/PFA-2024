import React from 'react'
import "./Products.css"

const Products = () => {
  return (
    <>
    <br/><br/>
        <div className="product">
            <div className="list">
            <br/>
                <h1>Product List</h1>
                <br/><br/><br/>
                <table class="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Iphone</td>
                        <td>Apple</td>
                        <td>Smart</td>
                        <td>$999</td>
                        <td>This</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Products