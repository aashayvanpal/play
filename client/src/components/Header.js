import React, { useState } from "react"
import { Accordion } from 'react-bootstrap';
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"

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
    const [orderDates, setOrderDates] = useState([])


    const selectedDates = (dateObjects) => {
        console.log('get all dates :', dateObjects.join().split(','))
        const allDates = dateObjects.join().split(',')
        console.log('check allDates :', allDates)
        setDates(allDates)

        const emptyDates = allDates.map(date =>
        ({
            [date]: {
                'Breakfast': { items: [] },
                'Lunch': { items: [] },
                'Dinner': { items: [] }
            }
        }))

        setOrderDates(emptyDates)
    }


    const dayNavigation = (mealType, date, index) => {
        console.log(mealType, date, index)
        setOrderType(mealType)

    }

    const confirmDate = (mealType, date, i) => {
        console.log('confirmDate:', mealType, date, i)
        const verifyItems = ['item1', 'item2', 'item3']

        const index = dates.indexOf(date)
        console.log('orderDates state:', orderDates)
        console.log('date present at:', index)
        console.log('date:', Object.keys(orderDates[index])[0])

        // orderDates[index][date][mealType] = { items: verifyItems } //correct way 
        orderDates[index][date][mealType] = { items: verifyItems }
        const newOrder = [...orderDates]
        setOrderDates(newOrder)

    }
    return (
        <div>
            <DatePicker
                multiple
                sort
                value={values}
                plugins={[
                    <DatePanel />]}
                onChange={selectedDates}
            />


            {/* {dates.map(date => <li>{date} - {order3.customer.fullName}</li>)} */}


            < iframe style={{ 'background': '#FFFFFF', 'border': 'none', 'borderRadius': '2px', 'boxShadow': '0 2px 10px 0 rgba(70, 76, 79, .2)' }} width="640" height="480" src="https://charts.mongodb.com/charts-aaswadcaterers-production-cedix/embed/charts?id=62965be6-02e8-4441-8bff-3cefed881463&maxDataAge=3600&theme=light&autoRefresh=true" ></iframe >
            < div >
                <Accordion
                    alwaysOpen
                // open='1'
                // toggle={function noRefCheck(target) { console.log('toggled target:', target) }}
                >
                    {dates.map((date, i) =>
                        <Accordion.Item key={i} eventKey={i} >
                            <Accordion.Header onClick={() => { console.log('clicked:', date, i) }} targetid={i} style={{ textAlign: 'center' }}>
                                {date}
                            </Accordion.Header>
                            <Accordion.Body accordianid={i} >
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

                                        {orderDates[i][date][orderType].items.map(item => <div key={item}>{item}<br /></div>)}
                                    </div>)
                                    : (null)}


                                <button onClick={() => confirmDate(orderType, date, i)}>confirm</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
                <button onClick={() => {
                    console.log('final order:', orderDates)
                    // if the orders have empty array , remove the property

                    order.forEach(orderObj => {
                        for (let obj in orderObj) {
                            // console.log(orderObj[obj])
                            for (let mealType in orderObj[obj]) {
                                // console.log(orderObj[obj][mealType].items.length)
                                if (orderObj[obj][mealType].items.length === 0) {
                                    delete orderObj[obj][mealType]
                                }
                            }
                        }
                    })

                    console.log(order)
                }}>Get final order</button>
            </div >
        </div >
    )
}