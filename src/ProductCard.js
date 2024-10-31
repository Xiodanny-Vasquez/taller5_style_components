import React from "react";

import styled from "styled-components";

const Card = styled.div`
  background-color: #fff6fe;
  border: 4px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h2`
  font-size: 2rem;
  margin-bottom: 8px;
  color: #df00c4;
  text-align: center;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const BuyButton = styled.button`
  background-color:blue;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
  }
`;

const ProductCard = () => {
  return (
    <Card>
      <ProductName>Tiramisú</ProductName>
      <ProductDescription>
      Disfruta de un clásico italiano con nuestro tiramisú, hecho con capas de bizcocho empapado en café, crema de mascarpone y un toque de cacao en polvo. ¡Un placer para los sentidos!
      </ProductDescription>
      <BuyButton>Comprar ahora</BuyButton>
    </Card>
  );
};

export default ProductCard;