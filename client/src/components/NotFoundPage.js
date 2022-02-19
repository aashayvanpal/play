import { Link } from 'react-router-dom'
import React from 'react'
import '../css/headerpage.css'
// import ReactAnime from 'react-animejs'
// const { Anime, stagger } = ReactAnime


export default function NotFoundPage() {
    return (
        <div>

            <h1>Page is not found</h1>
            <Link to='/'><button>Home</button></Link>
        </div >
    )

}