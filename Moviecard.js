import React from "react";

class Moviecard extends React.Component{
   
    addstared=()=>{
        this.setState({
            star:this.state.star+0.5
        })
    }
    decstar=()=>{
        this.setState({
            star:this.state.star-0.5
        })
    }
    handlefav=()=>{
        this.setState({
            fav:!this.state.fav
        })
    }
    render(){
        const {title,plot,price,rating,star,fav}=this.props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://cdn.vox-cdn.com/thumbor/iqbKqSTMnIh5kMdWAw0M0qIAORM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg" alt="poster"></img>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png"
                                alt="dec" onClick={this.decstar}/>
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                                alt="star" className="stars"/>
                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/10353/10353299.png"
                                alt="dec" onClick={()=>{this.props.addstar(this.props.movies)}}/>
                                <span className="starCount">{star}</span>
                            
                        
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={this.handlefav}>
                            {fav?"unfavourite-btn":"favourite-btn"} </button>
                            <button className="cart-btn">cart</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Moviecard;