import React, { useState } from "react"
import { Accordion } from 'react-bootstrap';
import DatePicker, { getAllDatesInRange } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import BreakfastComponent from './BreakfastComponent.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/headerpage.css'

export default function Example() {
    const today = new Date()
    const tomorrow = new Date()

    tomorrow.setDate(tomorrow.getDate() + 1)

    const [values, setValues] = useState([today, tomorrow])
    const [dates, setDates] = useState([])
    const [finalOrder, setFinalOrder] = useState({})
    const [orderType, setOrderType] = useState('Breakfast')



    const order1 = {
        "_id": "627ba8e6cbeef467aa1dfb1b",
        "items": [
            {
                "category": [
                    "all",
                    "lunch",
                    "dinner"
                ],
                "_id": "5f0e98411406c00fc3e4ba9f",
                "name": "Dal rice (Varan bhat)",
                "price": 45,
                "imgUrl": "Varan-bhat.jpeg",
                "display": true,
                "__v": 0,
                "measured": "plate",
                "ingredients": "",
                "recipie": "",
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "lunch",
                    "dinner"
                ],
                "_id": "5fcbd570b9349432c792b71c",
                "name": "Kadhi",
                "price": 50,
                "measured": "plate",
                "imgUrl": "Kadhi image",
                "display": true,
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "lunch",
                    "dinner"
                ],
                "_id": "5fcbcf58b9349432c792b712",
                "name": "Phulke",
                "price": "10",
                "measured": "pc",
                "imgUrl": "phulke image",
                "display": true,
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "lunch",
                    "dinner"
                ],
                "_id": "5fcbd686b9349432c792b720",
                "name": "Cauliflower-potato curry (Aloo-gobi bhaaji) ",
                "price": 50,
                "measured": "plate",
                "imgUrl": "coliflower potato sabji",
                "display": true,
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "lunch",
                    "dinner"
                ],
                "_id": "5f1a6e9b0bb9761000e7b8a8",
                "name": "Patal bhaji",
                "price": "40",
                "imgUrl": "Patal-bhaji.jpeg",
                "display": true,
                "__v": 0,
                "measured": "plate",
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "Lunch",
                    "dinner",
                    "sweets"
                ],
                "_id": "5f193edb20bbd31f38971fc4",
                "name": "Puran poli",
                "price": 40,
                "imgUrl": "Puran-poli.jpeg",
                "display": true,
                "__v": 0,
                "measured": "pc",
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "Lunch",
                    "dinner"
                ],
                "_id": "5fcbd4a3b9349432c792b717",
                "name": "Carrot Koshimbir",
                "price": 35,
                "measured": "plate",
                "imgUrl": "default.png",
                "display": true,
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "Lunch",
                    "dinner"
                ],
                "_id": "5fcbd4d6b9349432c792b718",
                "name": "Panchamrut",
                "price": 35,
                "measured": "plate",
                "imgUrl": "Panchamrut image",
                "display": true,
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "Lunch",
                    "dinner"
                ],
                "_id": "61ae5992ab397e5c1d2e0702",
                "name": "Gulab Jam ",
                "price": 25,
                "measured": "plate",
                "imgUrl": "default.png",
                "display": true,
                "ingredients": "",
                "recipie": "",
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "snacks"
                ],
                "_id": "627ba6adcbeef467aa1dfb17",
                "name": "Mix Dal wada",
                "price": 50,
                "measured": "plate",
                "imgUrl": "default.png",
                "display": true,
                "ingredients": "",
                "recipie": "",
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "Lunch",
                    "Dinner"
                ],
                "_id": "627ba717cbeef467aa1dfb18",
                "name": "Tila chi chutney",
                "price": 20,
                "measured": "plate",
                "imgUrl": "default.png",
                "display": true,
                "ingredients": "",
                "recipie": "",
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "Lunch",
                    "Dinner"
                ],
                "_id": "627ba733cbeef467aa1dfb19",
                "name": "Javas chi chutney",
                "price": 20,
                "measured": "plate",
                "imgUrl": "default.png",
                "display": true,
                "ingredients": "",
                "recipie": "",
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            },
            {
                "category": [
                    "all",
                    "Lunch",
                    "Dinner"
                ],
                "_id": "627ba751cbeef467aa1dfb1a",
                "name": "Mirchi Thecha",
                "price": 20,
                "measured": "plate",
                "imgUrl": "default.png",
                "display": true,
                "ingredients": "",
                "recipie": "",
                "__v": 0,
                "isSelected": true,
                "quantity": "40"
            }
        ],
        "customer": {
            "fullName": "Mahesh Ghadge",
            "phoneNumber": 9704930848.0,
            "email": "test@gmail.com",
            "address": "--",
            "queries": "",
            "eventName": "Pooja",
            "numberOfPeople": 40,
            "eventDate": "2022-05-25T05:30:00.000Z",
            "eventTime": "11:00",
            "homeDelivery": true,
            "service": true,
            "customer_id": "5f5dec1c7eef4a2e47018f6e"
        },
        "status": "completed",
        "__v": 0,
        "AdvanceAmount": 5000,
        "transport": {
            "medium": "Tempo",
            "rate": 2000
        }
    }
    const order2 = {}
    const order3 = { Dates: [] }

    order3.customer = order1.customer
    // order3.Dates[order1.customer.eventDate].push(...order1.items)
    // console.log(order3)

    const date1 = {
        "items": [
            {
                "category": [
                    "all",
                    "lunch",
                    "dinner"
                ],
                "_id": "5f1a6ebe0bb9761000e7b8aa",
                "name": "Plain Puri",
                "price": "30",
                "imgUrl": "Plain-puri.jpeg",
                "display": true,
                "__v": 0,
                "measured": "plate",
                "isSelected": true,
                "quantity": "23"
            },
            {
                "category": [
                    "all",
                    "lunch",
                    "dinner"
                ],
                "_id": "61a60a3f2f2c43c5df720b96",
                "name": "Buttermilk (Mattha)",
                "price": "30",
                "measured": "plate",
                "imgUrl": "default.png",
                "display": true,
                "ingredients": "",
                "recipie": "",
                "__v": 0,
                "isSelected": true,
                "quantity": "23"
            }]
    }

    console.log('render')
    console.log({ date1 })
    console.log({ order3 })




    return (
        <div>
            <DatePicker
                multiple
                sort
                value={values}
                plugins={[
                    <DatePanel />]}
                onChange={(dateObjects) => {
                    console.log(dateObjects.join().split(','))
                    setDates(dateObjects.join().split(','))
                    // console.log(getAllDatesInRange(dateObjects))
                    // let allDates = getAllDatesInRange(dateObjects, true);

                    // if (allDates.length < 2) return;

                    // console.log("you selected \n" + allDates.join(",\n"));
                }}
            />


            {dates.map(date => <li>{date} - {order3.customer.fullName}</li>)}


            <iframe style={{ 'background': '#FFFFFF', 'border': 'none', 'borderRadius': '2px', 'boxShadow': '0 2px 10px 0 rgba(70, 76, 79, .2)' }} width="640" height="480" src="https://charts.mongodb.com/charts-aaswadcaterers-production-cedix/embed/charts?id=62965be6-02e8-4441-8bff-3cefed881463&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            {/* <Button color="danger">Danger!</Button> */}
            <div>
                <Accordion
                    // open="1"
                    // toggle={function noRefCheck(target) { console.log(target) }}
                >
                    {dates.map((date, i) =>
                        <Accordion.Item>
                            <Accordion.Header onClick={() => { console.log('clicked:', date, i) }} targetId={i} style={{ textAlign: 'center' }}>
                                {date}
                            </Accordion.Header>
                            <Accordion.Body accordionId={i} >
                                <strong>
                                    <ul id="accordion-list">
                                        <li onClick={() => setOrderType('Breakfast')}>Breakfast</li>
                                        <li onClick={() => setOrderType('Lunch')}>Lunch</li>
                                        <li onClick={() => setOrderType('Dinner')}>Dinner</li>
                                    </ul>
                                    {orderType} <br />
                                    {order3.customer.fullName}
                                </strong>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </div>

        </div >
    )
}


// import React from 'react'
// import ReactAnime from 'react-animejs'
// const { Anime, stagger } = ReactAnime


// export default function Header() {
//     return (
//         <div>

//             This is header
//         </div>
//     )
// }
