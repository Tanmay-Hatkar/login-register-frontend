import React from "react"
import "./homepage.css"
import TransactionForm from "../transaction/TransactionForm"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Transaction Page</h1>
            <TransactionForm />
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage