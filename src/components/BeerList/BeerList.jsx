import React from "react";
import {list} from '../../services/BeerService'
import BeerBox from "../BeerBox/BeerBox";
import './BeerList.css'
import homeIcon from '../../assets/home.png'

class BeerList extends React.Component {
    state = {
        beers: [],
        loading: true
    }

    componentDidMount() {
        list()
     
            .then((beers)=>{
                this.setState({
                    beers: beers,
                    loading: false
                })        
            })
            .catch((err) => console.error(err))

            
    }

    componentDidUpdate() {
        console.log('He cambiado')
    }

    

    render() {
        return(
            <div className="BeerList">
               <div className="HomeIcon">
                <img src={homeIcon} />
               </div>
               <div className="RenderBeer">
                {this.state.loading ? (<div>Loading</div>) : (
                    <div>
                        {this.state.beers.map((beer)=>{
                            return <BeerBox key={beer.id} name={beer.name} 
                                tagline={beer.tagline} image={beer.image_url} contributedBy={beer.contributed_by}
                            />
                        })}
                    </div>
                )}
               </div>
            </div>
        )
    }
}

export default BeerList