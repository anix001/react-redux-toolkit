import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath:'api', //optional if your folder name is api
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:3500'}),
    tagTypes:['POST'],
    endpoints: builder => ({})
})