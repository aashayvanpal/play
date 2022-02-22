import '../css/headerpage.css'
import React from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import imgData from './image-exports'

export default class PDF extends React.Component {
    pdfGenerate = () => {
        var doc = new jsPDF('protrait', 'px', 'a4', 'false')
        doc.setFillColor('#ffe175');
        doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

        doc.rect(20, 20, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 40, 'S');
        doc.rect(25, 25, doc.internal.pageSize.width - 50, doc.internal.pageSize.height - 50, 'S');
        // doc.addPage()

        // doc.setFontSize(25);
        // doc.setTextColor(255, 0, 0);
        // doc.text(40, 60, 'Hello')

        // User details
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(18);
        doc.text(45, 150, 'Name :')
        doc.text(45, 165, 'Date :')
        doc.text(45, 180, 'Mobile :')

        // Order table
        // doc.table(45, 195, { 'name': "name1", 'email': 'email1' }, ['h1', 'h2'], [2, 2])
        doc.autoTable({
            head: [['Sl No', 'Particulars', 'Quantity', 'Rate', 'Amount']],
            theme: 'grid',
            headStyles: { fillColor: [226, 189, 56] },
            styles: {
                fontSize: 20
            },
            startY: 220,
            body: [
                ['Sl No', 'Particulars', 'Quantity', 'Rate', 'Amount'],
                [{
                    content: 'Transportation',
                    colSpan: 4,
                    styles: {
                        halign: 'right'
                    }
                }],
                [{
                    content: 'Total',
                    colSpan: 4,
                    styles: {
                        halign: 'right'
                    }
                }],
                [{
                    content: 'Advance Payment',
                    colSpan: 4,
                    styles: {
                        halign: 'right'
                    }
                }],
                [{
                    content: 'Balance',
                    colSpan: 4,
                    styles: {
                        halign: 'right'
                    }
                }]
            ],
        })
        // Caterer details
        doc.text(45, 500, 'From : Varsha Vanpal')
        doc.text(45, 515, 'Mobile : 9742814239')


        doc.addImage(imgData, 'JPEG', 120, 30, 200, 80)
        doc.save('bill.pdf')
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