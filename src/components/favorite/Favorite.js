import React, { Component } from 'react';
import getBeers  from '../../services/punkbeers.service';
import Product from '../product/product';

class Fvorites extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            favorites: []
        }
    }

    componentWillMount(){
        let favorites = JSON.parse(sessionStorage.getItem('favorites'));
        favorites = favorites ? favorites : [];
        if(favorites.length) {
            this.setState({loading:true})
            const url = `/beers?ids=${favorites.join('|')}`;
            getBeers(url)
            .then(response => {
                this.setState({ favorites: response.data, loading: false});
            })
            .catch(err=>{
                console.log('Error:', err);
            })
        }
    }

    renderFavorites = () => {
        const { favorites } = this.state;
        if(!favorites.length){
            return (
                <div>
                    <h4>No Favorite Beers...</h4>
                </div>
            )
        }
        return favorites.map(favorite => {
            return (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={favorite.id}>
                <Product item={favorite} isFavorite={true}/>
            </div>
        )})
    }

    render(){
        const { loading } = this.state;
        return (
        <div className="container-fluid px-5">
            <h3 className="my-5">
                Favorite Beens
           </h3>
           {
                loading 
                ?   <div className="text-center">
                        <i className="fa fa-spinner"></i>
                    </div>
                :   <div className="row">
                        {this.renderFavorites()}
                    </div> 
            }  
        </div>
        )
    }
}

export default Fvorites;