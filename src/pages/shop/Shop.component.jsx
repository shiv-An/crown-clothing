import React from "react";
import SHOP_DATA from './shop.data'
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";

class ShopPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            collection:SHOP_DATA
        }
    }

    render(){
        return(
            <div className="shop-page">{
                this.state.collection.map(
                    ({id,title,items})=>(
                        <CollectionPreview key={id} title={title} items={items} />
                    )
                )
            }</div>
        )
    }

}

export default ShopPage