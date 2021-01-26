import React, { Component } from 'react';
import { Carrousel, ImageCarrousel } from '../Components/Section';
import { ShopCard } from '../Components/Cards';
import { ImageCard } from "../Components/ImageCard";
import { FetchShops } from "../Services/Api";

export class Home extends Component {
    
    state = {
        shopList : []
    }
    
    componentDidMount() {
        FetchShops().then(r => {
            this.setState({
                shopList : r? r : []
            })
        })
    }
    
    render() {
        const { shopList } = this.state;
        
        return (
            <>
                <ImageCarrousel>
                    <ImageCard
                        alt={'hi'}
                        link={'/product'}
                        curimg={0}
                    />
                    <ImageCard
                        alt={'hi'}
                        link={'/product'}
                        curimg={1}
                    />
                    <ImageCard
                        alt={'hi'}
                        link={'/product'}
                        curimg={2}
                    />
                </ImageCarrousel>
                <Carrousel title={'Las Ventanas Más Vistas'}>
                    {
                        shopList?
                        shopList.map(( item, i ) => {
                            return <ShopCard
                                description={item.descripcion}
                                name={item.nombre}
                                key={i}
                                shop_id={item.id}
                            />
                        }):
                        <></>
                    }
                </Carrousel>

            </>
        );
    }
}
