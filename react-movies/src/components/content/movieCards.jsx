import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './movieCards.module.css'



function MovieCards({ poster, title }) {
    return (
        <div className={`${styles.backgroundColor} card`} data-bs-theme="dark">
            <img
                src={poster}
                style={{width: '200px'}}
                className="card-img-top"
                alt="Movie Poster"
                onError={(event) => {
                    event.target.src = 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                }}
            />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    );
}

export default MovieCards