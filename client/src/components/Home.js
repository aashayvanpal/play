import '../css/headerpage.css'
import logo from '../images/aaswad-logo.svg'
import ReactAnime from 'react-animejs'
import React from 'react'
import ModalExample from './ModalExample'
const { Anime, stagger } = ReactAnime

export default function Home() {
    return (
        <div>
            This is Home component
            <div>
                <ModalExample buttonLabel="Open the modal" />
            </div >
        </div>
    )

}