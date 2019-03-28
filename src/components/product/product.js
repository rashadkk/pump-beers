import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFavorite: props.isFavorite,
            item: props.item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        }
    }

    addToFavorites = () => {
        const { isFavorite, item } = this.state;
        let favorites = JSON.parse(sessionStorage.getItem('favorites'));
        favorites = favorites ? favorites : [];
        if(isFavorite){
            this.setState({ isFavorite: false});
            favorites = favorites.filter(fId => fId !== item.id);
            sessionStorage.setItem('favorites', JSON.stringify(favorites));
        }else{
            this.setState({ isFavorite: true});
            favorites.push(item.id);
            sessionStorage.setItem('favorites', JSON.stringify(favorites));
        }  
    }

    render(){
        const { item, isFavorite } = this.state;
        return (
            <div className="card product-card">
                <div className="card-body">
                    <a className="favorite-icon" onClick={this.addToFavorites} >
                        {
                            isFavorite
                            ? <i className="fa fa-star text-primary"></i>
                            : <i className="fa fa-star-o text-primary"></i>
                        }
                        
                    </a>
                
                    <div className="d-flex">
                        <div className="p-3">
                            <img src={item.image_url} style={{height: '200px'}} alt={item.name} />
                        </div>
                        <div className="px-4 pt-4">
                            <h6>{item.name}</h6>
                            <p className="m-0 description-text">{item.description}</p>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default Product;