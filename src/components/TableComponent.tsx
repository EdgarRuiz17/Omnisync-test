import {Button} from "@mui/material"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Open', renderCell: (cellValue) => {
    return <Button href={cellValue.row.id}><OpenInNewIcon href={cellValue.row.id} color='inherit'/></Button>
  }},
  { field: 'display_name', headerName: 'Intitution Name',type: 'string'},
  { field: 'country_code', headerName: 'Country', type: 'string'},
  { field: 'type', headerName: 'Type', type: 'string'},
];

interface DataTableInterface {
    rows: institution[];
    isLoading: boolean;
}

export const DataTable = (props:DataTableInterface) => {
  return (
    <div style={{ minHeight: 400 }}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        loading={props.isLoading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}