import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Search = ({ CartItem }) => {
  return (
    <>
      <section className='search'>
        <div className='container c_flex'> 
          <div className='cart'>
            <Link to='/cart'>
            <a className="shopping"><ShoppingCartIcon/></a>
              <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
