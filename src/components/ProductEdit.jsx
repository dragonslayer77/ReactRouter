import React from 'react';

const ProductEdit =() => {
        return (
            <div>
               <form>
                    <input type="text" value="name" />
                    <br></br>
                    <input type="text" value="description" />
                    <br></br>
                    <input type="submit" value="Edit" />
               </form>
            </div>
        );
}

export default ProductEdit;