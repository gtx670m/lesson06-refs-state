import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import Table from './components/Table';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Apple iPhone 6 Plus 16GB',
          price: 15000000,
          image: 'https://cdn1.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-hh-600x600.jpg',
          children: 'CPO',
          status: true
        },
        {
          id: 2,
          name: 'Samsung Galaxy S9',
          price: 19000000,
          image: 'data:image/jpeg;base64,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',
          children: 'Cty',
          status: true
        },
        {
          id: 3,
          name: 'Oppo Find X',
          price: 21000000,
          image: 'https://image2.geekbuying.com/ggo_pic/2018-07-16/OPPO-Find-X-6-42-Inch-8GB-128GB-Smartphone-Blue-688440-.jpg',
          children: 'Xach tay',
          status: true
        }
      ],
      isActive: true
    };
  }
  onAddProduct = () => {
    console.log(this.refs.input_name.value);
  }
  toggleActive = () => {
    this.setState({
      isActive : !this.state.isActive
    })
  }
  render() {
    let elements = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result =
          <Product
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}>
            {product.children}
          </Product>
      }
      return result;
    });

    let elements2 = this.state.products.map((product, index) => {
      let result = '';
      if (this.state.isActive) {
        result =
          <Table
            key={product.id}
            stt={index + 1}
            name={product.name}
            image={product.image}
            price={product.price}
          />
      }
      return result;
    });

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">Tên Sản Phẩm</h3>
                  </div>
                  <div className="panel-body">
                    <div>
                      <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" className="form-control" placeholder="Input field" ref="input_name" />
                      </div>
                      <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements}
              </div>
              
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {elements2}
              </div>

              <button type="button" className="btn btn-warning"
              onClick={this.toggleActive}>
                Active : {this.state.isActive === true ? 'true' : 'false' }
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
