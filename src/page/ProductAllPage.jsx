import React, { useEffect, useState } from "react";
import ProductCard from "../component/productCard";

import { useSearchParams } from "react-router-dom";

const ProductAllPage = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";

    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    const category = query.get("category");

    // 1. 카테고리 필터
    let filtered = category
      ? data.filter((item) => item.product === category)
      : data;

    // 2. 이름 기반 검색 필터 추가
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setProductList(filtered);
  };

  useEffect(() => {
    getProducts();
  }, [setQuery]);
  return (
    <div className="container bg">
      <div className="inner-container">
        {productList.map((menu) => (
          <ProductCard item={menu}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductAllPage;
