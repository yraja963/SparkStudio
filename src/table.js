import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useState } from 'react';

const Table = () => {
	const [data, setData] = useState([
		{
			id: "id",
			name: 'name',
			email: 'email',
			gender: 'gender',
			dob: "dob",
			country: 'country',
			city: 'city',
		},
	]);
	const [finaldata ,setFinaldata]=useState()
	const [gridApi,setGridApi]=useState()

	const col = [
		{ headerName: 'Id', field: 'id', checkboxSelection: true },
		{ headerName: 'Name', field: 'name' },
		{ headerName: 'Email', field: 'email' },
		{ headerName: 'Gender', field: 'gender' },
		{ headerName: 'DOB', field: 'dob' },
		{ headerName: 'Country', field: 'country' },
		{ headerName: 'City', field: 'city' },
	];
	const defaultcolDef = { sortable: true, editable: true };
	const AddRows = () => {
		setData([
			{
				id: 1,
				name: 'raja',
				email: 'yraja963@gmail.com',
				gender: 'male',
				dob: 25 - 10 - 1998,
				country: 'India',
				city: 'Hyderabad',
			},
		]);
	};
	const rowSelectionType = 'multiple';


	const submitHandler = () => {
	const selectednodes=gridApi.getSelectedRows()
	const selectedData=selectednodes.map(node=>node)
	setFinaldata(selectedData)
	};
	const deleterow=()=>{
		const selectednodes=gridApi.getSelectedRows()
	}

	return (
		<div className="ag-theme-alpine" style={{ width: 1300, height: 400 }}>
			<button onClick={AddRows}>AddRows</button>
			<button onClick={deleterow}>DeleteRows</button>
			<button onClick={submitHandler}>submit</button>

			<AgGridReact
				columnDefs={col}
				defaultColDef={defaultcolDef}
				rowData={data}
				rowSelection={rowSelectionType}
				onSelectionChanged={submitHandler}
				onGridReady={params=>{setGridApi(params.api)}}
			/>
			<AgGridReact columnDefs={col} rowData={finaldata}  />
		</div>
	);
};
export default Table;
