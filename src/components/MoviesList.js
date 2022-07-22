import {Link} from "react-router-dom"
export default function MoviesList({movies}){
    const renderedMovies=Object.keys(movies).map(movieID=>(
        <li key={movieID}>
            <Link to={`/movies/${movieID}`}>
                {movies[movieID].title}
            </Link>
        </li>
    ))
    return <ul>{renderedMovies}</ul>
}