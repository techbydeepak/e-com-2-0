import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import {useParams} from "react-router-dom"
import Bredcrums from '../Components/BredCrums/BredCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

function Product() {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === parseInt(productId));
  return (
    <div>
      <Bredcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
