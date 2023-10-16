const Card = (key, id, img, name, genre, platforms, description, releseDate, rating)=>{
    return(
        <div> 
            <img src={img} alt="Not found"/>
            <h3>{name}</h3>
            <h3>{genre}</h3>
            <h3>{platforms}</h3>
            <h3>{description}</h3>
            <h3>{releseDate}</h3>
            <h3>{rating}</h3>
        </div>
    )
}


export default Card;