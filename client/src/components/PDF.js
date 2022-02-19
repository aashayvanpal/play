import '../css/headerpage.css'
import React from 'react'
import jsPDF from 'jspdf'


export default class PDF extends React.Component {
    pdfGenerate = () => {
        var doc = new jsPDF('protrait', 'px', 'a4', 'false')
        doc.setFillColor('#ffe175');
        doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

        doc.rect(20, 20, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 40, 'S');
        // doc.addPage()

        doc.setFontSize(25);
        doc.setTextColor(255, 0, 0);
        doc.text(40, 60, 'Hello')

        doc.setTextColor(0, 0, 0);
        doc.setFontSize(18);
        doc.text(45, 75, 'Item1')
        doc.text(45, 90, 'Item2')
        doc.text(45, 105, 'Item3')
        doc.text(45, 120, 'Item4')

        doc.save('Aaswad-menu.pdf')
    }
    render() {
        return (
            <div>
                This is PDF component <br />
                <button onClick={this.pdfGenerate}>Download Menu Card</button>
                <div>
                </div>
            </div>
        )
    }

}