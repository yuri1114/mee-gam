import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
  };
  const addCart = () => {};
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="container">
      <div className="detail-product">
        <div className="img-container">
          <img src={product?.image} alt="" />
        </div>
        <div className="right-info">
          <p className="name">{product?.name}</p>
          <p className="price">$ {product?.price}</p>
          <p className="price">{product?.description}</p>
          <p className="price">size : {product?.size}</p>

          <button onClick={addCart} className="add-cart">
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
