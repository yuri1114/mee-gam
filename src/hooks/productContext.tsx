import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  description: string;
}

interface ProductContextType {
  products: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/yuri1114/mee-gam-data/refs/heads/main/products.json"
      )
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch(() => {
        console.log("데이터 불러오기 실패");
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): { products: Product[] } => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext는 ProductProvider 안에서 사용해야 합니다."
    );
  }
  return context;
};
