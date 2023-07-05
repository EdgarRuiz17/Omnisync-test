import { Box, TextField } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import { DataTable } from "../components/TableComponent"
import { getInstitutions } from "../lib/backendClient"

const SearchScreen = () => {
    const [typedValue, setTypedValue] = useState<string>("")
    const [institutions, setInstitutions] = useState<institution[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
      const fetchInstitutions = async () => {
        const fetchInstitutionsResponse = await getInstitutions()
        setInstitutions(fetchInstitutionsResponse.data.results)
        setIsLoading(false)
      }
      fetchInstitutions()
    }, [])

    const filteredData = useCallback(()=>{
        const filter = institutions.filter(e=>e.display_name.includes(typedValue))
        return filter
    },[typedValue,institutions])
    
  return (
    <Box sx={{display:"flex", justifyContent:"center", my:2}}>
      <Box sx={{display:"flex", flexDirection:"column", rowGap:2, minWidth:300}}>
          <TextField label="Search by name" value={typedValue} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setTypedValue(e.target.value);}}/>
          <DataTable rows={filteredData()} isLoading={isLoading}/>
      </Box>
    </Box>
  )
}

export default SearchScreen