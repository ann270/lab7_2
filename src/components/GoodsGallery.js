import React from 'react';
import GoodsCard from './GoodsCard';
import '../App.css';

function GoodsGallery() {
  const goods = [
    { image: 'https://media.istockphoto.com/id/184276818/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE.jpg?s=612x612&w=0&k=20&c=HDH3wLEAvc7soT85pAcS4JOQu5KJ8xM9JOilVe1zFLI=', name: 'Apple', cost: 15 },
    { image: 'https://img3.zakaz.ua/src.1597936874.ad72436478c_2020-08-20_Alina/src.1597936874.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', name: 'Pear', cost: 20 },
    { image: 'https://gosdim.shop/wp-content/uploads/2020/04/00000038923.jpg', name: 'Grape', cost: 25 },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdC6Dau4UAv7z3TXNULKAMe4RKe1t2Z3UGiw&s', name: 'Peach', cost: 18 },
    { image: 'https://images.silpo.ua/products/1600x1600/f5214071-6d83-4de8-b655-b977809cf880.png', name: 'Banana', cost: 22 },
    { image: 'https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png', name: 'Orange', cost: 19 }
  ];

  return (
    <div className="goods-gallery">
      {goods.map((good, index) => (
        <GoodsCard key={index} image={good.image} name={good.name} cost={good.cost} />
      ))}
    </div>
  );
}

export default GoodsGallery;
