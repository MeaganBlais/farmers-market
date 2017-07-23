class FarmerProfile extends React.Component {

  handleClickAddProduct(e) {
    e.preventDefault();
    window.location.href = '/products/new';
    console.log('The link was clicked');
  }

  handleClickAddMarket(e) {
    e.preventDefault();
    window.location.href = '/markets/new';
    console.log('New Market');
  }

  handleClickViewProduct(e) {
  const url = '/farmers/' + this.props.id + '/products'
  e.preventDefault();
  window.location.href = url;
  console.log('The link was clicked');
  }

  render() {
    return (<div>
      <div className="field"> Farm Name: {this.props.farm_name} </div>
      <div className="field"> First Name: {this.props.first_name} </div>
      <div className="field"> Last Name: {this.props.last_name} </div>
      <div className="field"> Email: {this.props.email} </div>
      <div className="field"> Phone No: {this.props.phone_no} </div>
      <div className="field"> Website_Link: {this.props.website_link} </div>
      <div className="field"> Description: {this.props.description} </div>
      <div><img src={this.props.image}/></div>
      <button onClick={this.handleClickAddProduct}>Add Product</button>
      <button onClick={this.handleClickAddMarket}>Add Market</button>
      <button onClick={this.handleClickViewProduct.bind(this)}>View Products</button>
    </div>);
  }
}
