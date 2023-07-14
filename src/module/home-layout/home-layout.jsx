import React, { Component } from 'react'
import Header from './header'
import Content from './content'
import Navigation from './navigation'
import Footer from './footer'

// Tạo component dùng để tái sử dụng được nhiều nơi.

//? Có 2 loại component:
// 1. Component cho page
// 2. Tái sử dụng ở nhiều trang (không nên xét width và height)
export default class HomeLayout extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <div className='row'>
            <div className="col-4">
                <Navigation/>
            </div>
            <div className="col-8">
                <Content/>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
