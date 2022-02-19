import React from 'react'
import ModalExample from './ModalExample.js'
import ToastExample from './ToastExample.js'
import confirm from 'reactstrap-confirm'

import Multiselect from 'multiselect-react-dropdown';


export default class Modal extends React.Component {
    constructor() {
        super()
        this.state = {
            openModal: false,
            ShowToast: false,
            options: [{ name: 'All', id: 1 }, { name: 'Lunch', id: 2 }, { name: 'Dinner', id: 3 }],
            selectedValues: [{ name: 'All', id: 1 }]
        }

        this.onSelect = this.onSelect.bind(this)
        this.onRemove = this.onRemove.bind(this)

    }
    onSelect(selectedList, selectedItem) {
        console.log('inside onSelect')
        console.log('selectedList', selectedList)
        console.log('selectedItem', selectedItem)
        this.setState({ selectedValues: selectedList })

    }
    onRemove(selectedList, selectedItem) {
        console.log('inside onRemove')
        console.log('selectedList', selectedList)
        console.log('selectedItem', selectedItem)
        this.setState({ selectedValues: selectedList })

    }

    render() {
        return (
            <div>
                <button id="modal" onClick={() => { this.setState({ openModal: true }) }}>
                    Open the modal from this button
                </button>
                <ModalExample isOpen={this.state.openModal}
                    closeModal={() => { this.setState({ openModal: false }) }}
                />


                <button id="confirm" onClick={async () => {
                    let result = await confirm({
                        title: (
                            <>
                                Content can have <strong>JSX</strong>!
                            </>
                        ),
                        message: "Are you sure you want to delete :  ??",
                        confirmText: "Delete",
                        confirmColor: "warning",
                        cancelColor: "link text-danger"
                    })
                    console.log("result is :", result)
                }}> confirm ?</button>

                <Multiselect
                    options={this.state.options} // Options to display in the dropdown
                    placeholder="Select Categories"
                    selectedValues={this.state.selectedValues} // Preselected value to persist in dropdown
                    onSelect={this.onSelect} // Function will trigger on select event
                    onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                />

                <button onClick={() => { this.setState({ ShowToast: true }) }}>
                    Open the Toast from this button
                </button>
                <ToastExample isOpen={this.state.ShowToast}
                    closeModal={() => { this.setState({ ShowToast: false }) }}
                />
                <button onClick={() => {
                    console.log("selcted multiselect values are:", this.state.selectedValues)
                }}>get multiselect values</button>
            </div >
        )
    }
}