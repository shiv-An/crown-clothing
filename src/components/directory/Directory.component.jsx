import React from "react";
import MenuItem from "../menu-item/MenuItem.component";
import './Directory.styles.scss'

class Directory extends React.Component {
    constructor(){
        super()
        this.state = {
            sections:[
                {
                  title: 'hats',
                  imageUrl: `${process.env.PUBLIC_URL}/images/hats.png`,
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl:`${process.env.PUBLIC_URL}/images/jackets.png`,
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: `${process.env.PUBLIC_URL}/images/sneakers.png`,
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: `${process.env.PUBLIC_URL}/images/womens-style.png`,
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: `${process.env.PUBLIC_URL}/images/Men-style.jpg`,
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
            {
                this.state.sections.map(({title,id,imageUrl,size,linkUrl})=>{
                    return(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    )
                })
            }
            </div>
        )
    }
}

export default Directory;