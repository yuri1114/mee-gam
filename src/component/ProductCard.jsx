import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="card" onClick={showDetail}>
      <div className="imgContainer">
        <img src={item?.image} alt="" />
      </div>
      <p className="item">{item?.product}</p>
      <p className="name">{item?.name}</p>
      <p className="price">$ {item?.price}</p>
    </div>
  );
};

export default ProductCard;
