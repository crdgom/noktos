import { useEffect } from "react"

export const GetApi = async() => {
    useEffect(() => {
        const email = "jesus291196@gmail.com"
        const password = "123456"
        const sistema = 2
        const getUrl = 'https://desarrollo.api.noktos.com/api/login'

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'},
            body: JSON.stringify({email, password, sistema})
            }
        const response = await fetch (getUrl, requestOptions)
        const data = await response.json();
        data.map(responseD => {
            return {
                res: responseD.res,
                token: responseD.token,
                message: responseD.message
                }
            }))
    return info;
}