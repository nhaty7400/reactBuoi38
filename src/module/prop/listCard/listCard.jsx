import React, { Component } from "react";
import Card from "../card/card";

const listProduct = [
  {
    id: 1,
    name: "Black Car",
    price: "99$",
    img: "/image/cars/black-car.jpg",
  },
  {
    id: 2,
    name: "Red Car",
    price: "100$",
    img: "/image/cars/red-car.jpg",
  },
  {
    id: 3,
    name: "Silver Car",
    price: "123$",
    img: "/image/cars/silver-car.jpg",
  },
  {
    id: 4,
    name: "Steel Car",
    price: "322$",
    img: "/image/cars/steel-car.jpg",
  },
];

export default class ListCard extends Component {
  render() {
    const nameCyber="Cyber Soft"
    return (
      <div className="container mt-2 d-flex gap-4">
        {listProduct.map((item) => {
            // tạo props: name có giá tị là item.name

            //? pros giúp chúng ta chia sẻ, truyền dữ liệu từ component cha sang component con
          return <Card
          hinhAnh={item.img} gia={item.price} name={item.name} key={item.id} />;
        })}

        <ComponentCon tenTrungTam={nameCyber}/>
      </div>
    );
  }
}

class ComponentCon extends Component{
    render(){
        console.log(this.props);
        return (
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, asperiores.
                {this.props.tenTrungTam}

            </div>
        )
    }
}
