import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr key={this.props.id}>
              <td>{this.props.stt}</td>
              <td>{this.props.name}</td>
              <td>
                <span className="label label-success">{this.props.price}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
