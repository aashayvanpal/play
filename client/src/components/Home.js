import '../css/headerpage.css'
import React from 'react'
import ModalExample from './ModalExample'

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