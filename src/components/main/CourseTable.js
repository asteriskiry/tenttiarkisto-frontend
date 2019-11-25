import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const paginationOptions = {
    hideSizePerPage: true,
    sizePerPageList: [
        {
            text: '25', value: 25
        }
    ]
}

const expandRow = {
    renderer: row => {
      return (
        <div>
            <ul>
                { row.exams.map(exam => <li><a href=''>{exam}</a></li>)}
            </ul>
            
        </div>
      )
    },
    showExpandColumn: true,
    expandByColumnOnly: true,
    onlyOneExpanding: true,
    expandColumnPosition: 'right'
}

function selectOptions(subjects) {
    const options = {}
    subjects
        .map(s => { return {id: s.id, name: s.name} })
        .forEach(s => Object.assign(options, {[s.id]: s.name}))
    return options
}

function subjectFormatter (cell, row, rowIndex, formatExtraData) {
    return formatExtraData.subjects.find(s=> s.id == cell).name
}

const numOfExamsFormatter = (cell, row) => {
    return row.exams.length
}

const columns = subjects => [
    {
        dataField: 'name',
        text: 'Kurssi',
        filter: textFilter()
    }, 
    {
        dataField: 'subject',
        text: 'Oppiaine',
        formatter: subjectFormatter,
        formatExtraData: {subjects: subjects},  
        filter: selectFilter({
            options: selectOptions(subjects)
          })
    }, 
    {
        dataField: 'numOfExams',
        text: 'Tenttien määrä',
        formatter: numOfExamsFormatter,
    }
]


export default ({ data }) => {
    const courses = data.subjects.length > 0 ? data.courses.map(course => { return {id: course.id, name: course.name, subject: course.subjectId, exams: ['lulz', 'foo bar']}}) : []
    return (
        <BootstrapTable 
            keyField='id' 
            data={ courses } 
            columns={ columns(data.subjects) }
            pagination={ paginationFactory(paginationOptions) }
            filter={ filterFactory() }
            expandRow={ expandRow }
            bootstrap4
        />
    )
}
  