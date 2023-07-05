type institution = {
    id: string;
    display_name: string;
    country_code: string;
    type: string
}

type institutionResponse = {
    results: institution[]
}

