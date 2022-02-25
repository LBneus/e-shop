import react from "react";

import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/preview-collection/collection-preview.components";

class ShopPage extends react.Component{
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        )
    }
}

export default ShopPage;
