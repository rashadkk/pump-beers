import React, { Component } from 'react';
import Product from '../product/product';
import getBeers  from '../../services/punkbeers.service';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchKey: '',
            loading: false,
            products: []
        }
    }

    componentWillMount(){
        this.setState({loading: true})
        getBeers('/beers')
        .then(response => {
            this.setState({ products: response.data, loading: false});
        })
        .catch(err=>{
            console.log('Error:', err);
        })
    }

    searchChangeHandler = event => {
        this.setState({searchKey: event.target.value});
    }

    searchHandler = () => {
        const { searchKey } = this.state;
        if(!searchKey || searchKey === '')
            return false;
        const url = `/beers?beer_name=${searchKey}`;
        getBeers(url)
        .then(response => {
            this.setState({ products: response.data});
        })
        .catch(err=>{
            console.log('Error:', err);
        })

    }

    renderProducts = () => {
        const { products } = this.state;
        if(!products.length){
            return (
                <div>
                    <h4>No Product Found...</h4>
                </div>
            )
        }
        let favoteItems = JSON.parse(sessionStorage.getItem('favorites'));
        favoteItems = favoteItems ? favoteItems : []
        return products.map(product => {
            const idx = favoteItems.indexOf(product.id);
            return (
                    <div className="col-lg-4 col-md-6 col-12 mb-4" key={product.id} >
                        <Product item={product} isFavorite={idx >= 0 ? true : false }/>
                    </div>
            )
        })
    }

    render(){
        const { searchKey, loading } = this.state;
        return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            <div className="container-fluid px-5">
                <div className="p-5">
                    <div className="input-group mb-3 w-75 mx-auto">
                        <input type="text" className="form-control"
                                value={searchKey}
                                onChange={this.searchChangeHandler}
                                placeholder="Serch for beens"/>
                        <div className="input-group-append">
                            <button className="input-group-text btn btn-primary"
                                    onClick={this.searchHandler}
                            >Search</button>
                        </div>
                    </div>
                </div>
                {
                    loading 
                    ?   <div className="text-center">
                            <i className="fa fa-spinner"></i>
                         </div>
                    :   <div className="row">
                            {this.renderProducts()}
                        </div> 
                }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            </div>
        )
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

export default Home;