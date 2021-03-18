import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useState } from 'react';


const ShowGrid=()=>{
    return(<div>
        <AgGridReact />
    </div>)
}
export default ShowGrid;