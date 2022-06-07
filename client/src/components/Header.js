import React, { useState } from "react"
import { Accordion } from 'react-bootstrap';
import DatePicker, { getAllDatesInRange } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import BreakfastComponent from './BreakfastComponent.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/headerpage.css'




// trying to render items in the checked , giving undefined error



export default function Example() {
    const today = new Date()
    const tomorrow = new Date()

    tomorrow.setDate(tomorrow.getDate() + 1)

    const [values, setValues] = useState([today, tomorrow])
    const [dates, setDates] = useState([])
    const [finalOrder, setFinalOrder] = useState({})
    const [orderType, setOrderType] = useState('Breakfast')
    const [orderDates, setOrderDates] = useState([
        {
            '2022/06/07': {
                'Breakfast': { items: [11, 22, 33] },
                'Lunch': { items: ['l1', 'l2', 'l3'] },
                'Dinner': { items: ['d1', 'd2', 'l3'] }
            }
        },
        {
            '2022/06/08': {
                'Breakfast': { items: [44, 55, 66] },
                'Lunch': { items: ['q1', 'q2', 'q3'] },
                'Dinner': { items: ['w1', 'w2', 'w3'] }
            }
        },
        {
            '2022/06/09': {
                'Breakfast': { items: [77, 88, 99] },
                'Lunch': { items: ['aa', 'as', 'ad'] },
                'Dinner': { items: ['zx', 'zc', 'zv'] }
            }
        }])

    // const [orderDates, setOrderDates] = useState([])





    const dayNavigation = (mealType, date, index) => {
        console.log(mealType, date, index)
        setOrderType(mealType)

    }

    const confirmDate = (mealType, date) => {
        console.log('confirmDate:', mealType, date)
        const verifyItems = ['item1', 'item2', 'item3']
        orderDates[mealType] = { items: verifyItems }
        // console.log('obj:'obj)
        // console.log('obj:', orderDates[mealType])
        // console.log('obj2:', { [mealType]: orderDates[mealType] })
        const newOrder = { [date]: { [mealType]: orderDates[mealType] } }
        console.log('new order:', newOrder)
        setOrderDates([...orderDates, newOrder])
        // console.log('final date:', orderDates)
    }
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

                    const emptyDates = dateObjects.join().split(',').map(date =>
                    ({
                        [date]: {
                            'Breakfast': { items: [11, 22, 33] },
                            'Lunch': { items: [44, 55, 66] },
                            'Dinner': { items: [77, 88, 99] }
                        }
                    }))
                    console.log('empty dates', emptyDates)
                    setOrderDates([...orderDates, emptyDates])


                    // console.log(getAllDatesInRange(dateObjects))
                    // let allDates = getAllDatesInRange(dateObjects, true);

                    // if (allDates.length < 2) return;

                    // console.log("you selected \n" + allDates.join(",\n"));
                }}
            />


            {/* {dates.map(date => <li>{date} - {order3.customer.fullName}</li>)} */}


            < iframe style={{ 'background': '#FFFFFF', 'border': 'none', 'borderRadius': '2px', 'boxShadow': '0 2px 10px 0 rgba(70, 76, 79, .2)' }} width="640" height="480" src="https://charts.mongodb.com/charts-aaswadcaterers-production-cedix/embed/charts?id=62965be6-02e8-4441-8bff-3cefed881463&maxDataAge=3600&theme=light&autoRefresh=true" ></iframe >
            {/* <Button color="danger">Danger!</Button> */}
            < div >
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
                                        <li onClick={() => dayNavigation('Breakfast', date, i)}>Breakfast</li>
                                        <li onClick={() => dayNavigation('Lunch', date, i)}>Lunch</li>
                                        <li onClick={() => dayNavigation('Dinner', date, i)}>Dinner</li>
                                    </ul>
                                    {/* {order3.customer.fullName} */}

                                </strong>

                                {orderType} for {date} <br />

                                {typeof (orderDates[i][date][orderType]) !== 'undefined' ?
                                    (<div>

                                        {orderDates[i][date][orderType].items.map(item => item)}
                                    </div>)
                                    : (null)}


                                <button onClick={() => confirmDate(orderType, date)}>confirm</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>


            </div >

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
