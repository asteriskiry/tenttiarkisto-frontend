import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const columns = [
    {
        dataField: 'name',
        text: 'Kurssi',
        filter: textFilter()
    }, 
    {
        dataField: 'subject',
        text: 'Oppiaine',
    }, 
    {
        dataField: 'numOfExams',
        text: 'Tenttien määrä'
    }
]

const paginationOptions = {
    hideSizePerPage: true,
    sizePerPageList: [
        {
            text: '25', value: 25
        }
    ]
}

const expandRow = {
    renderer: row => (
      <div>
        <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
        <p>You can render anything here, also you can add additional data on every row object</p>
        <p>expandRow.renderer callback will pass the origin row object to you</p>
        <p>LIST OF LINKS OF EXAMS HERE!</p>
      </div>
    ),
    showExpandColumn: true,
    expandByColumnOnly: true,
    onlyOneExpanding: true,
    expandColumnPosition: 'right'
  }

export default ({ data }) => (
    <BootstrapTable 
        keyField='id' 
        data={ data } 
        columns={ columns }
        pagination={ paginationFactory(paginationOptions) }
        filter={ filterFactory() }
        expandRow={ expandRow }
        bootstrap4
    />
)
  