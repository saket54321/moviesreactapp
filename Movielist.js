import {Component} from "react";
import Moviecard from "./Moviecard";
class Movielist extends Component{
    constructor(){
        super();
            this.state={
                movies:[
                    {title:"avenger",
                plot:"super natural",
                poster:"https://cdn.vox-cdn.com/thumbor/iqbKqSTMnIh5kMdWAw0M0qIAORM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg",
                price:199,
                rating:8.8,
                star:0,
                fav:false
                    },
                    {title:"avenger",
                    plot:"super natural",
                    poster:"https://cdn.vox-cdn.com/thumbor/iqbKqSTMnIh5kMdWAw0M0qIAORM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg",
                    price:199,
                    rating:8.8,
                    star:0,
                    fav:false
                        },
                        {title:"avenger",
                        plot:"super natural",
                        poster:"https://cdn.vox-cdn.com/thumbor/iqbKqSTMnIh5kMdWAw0M0qIAORM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg",
                        price:199,
                        rating:8.8,
                        star:0,
                        fav:false
                            },
                            {title:"avenger",
                plot:"super natural",
                poster:"https://cdn.vox-cdn.com/thumbor/iqbKqSTMnIh5kMdWAw0M0qIAORM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg",
                price:199,
                rating:8.8,
                star:0,
                fav:false
                    },         
                ]
            }
        
    }
    handlestar =(movie)=>{
        const {movies}=this.state;
        const mid = this.state.movies.indexOf(movie);
        movies[mid].star+=0.5;
        this.setState({
            movies:movies
        })


    }
    render(){
        const {movies}=this.state;
        return(
            <>
            {movies.map((movie)=><Moviecard movies={movie} addstar={this.handlestar}/>)}
            
            </>
        )
    }
}
export default Movielist;