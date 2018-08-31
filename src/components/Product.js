import React, { Component } from 'react';

class Product extends Component {
//Cách 1
  constructor(props) {
    super(props);
    this.onAddToCart2 = this.onAddToCart2.bind(this);
  }
  onAddToCart2(content){
    alert(content.name + ' - ' + content.price);
  }
//Cách 2
  onAddToCart = () => {
    alert(this.props.name + ' - ' + this.props.price);
  }
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.image} alt={this.props.name} />
            <div className="caption">
              <h3>{this.props.name}</h3>
              <p>{this.props.price}</p>
              <p>{this.props.children}</p>
              <p>
                <a className="btn btn-primary" onClick={this.onAddToCart}>Mua ngay</a>
                <a className="btn btn-primary" onClick={() => this.onAddToCart2(this.props)}>Mua ngay</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Product;
