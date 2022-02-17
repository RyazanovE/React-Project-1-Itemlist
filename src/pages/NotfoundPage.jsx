import React from "react"
import { Link } from "react-router-dom"

export const NotfoundPage = () => {

    return(
        <div className="jumbotron container">
            <h1 className="display-4">404</h1>
            <p className="lead">There is no such page</p>
            <hr className="my-4"/>
            <p>Check url</p>
            <p className="lead">
            <Link className="btn btn-primary btn-lg" to="/home" role="button">Home</Link>
            </p>
      </div>
    )

}