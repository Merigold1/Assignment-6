import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import styles from './navbar.module.css'

function Navbar(props) {
    return (
      
            <nav className={`navbar ${styles.backgroundColor}`} >
                <div className="container-fluid">
                    <a className={`navbar-brand ${styles.title}`}>FlixHQ</a>
                    <form className="d-flex" role="search">
                        <input className="form-control" 
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search" 
                        data-bs-theme="dark"
                        onChange={e => {
                            props.onChange(e.target.value)
                        }}>
                        </input>
                            <button className="btn btn-success" type="button" onClick={() => {props.onClick()}}>Search</button>
                    </form>
                </div>
            </nav>
        

    )
}

export default Navbar