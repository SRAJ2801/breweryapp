import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Brewery = () => {
    const location = useLocation();
    const [data, setdata] = useState({})

    useEffect(() => {
        if (location.state.brewery) {
            setdata(location.state.brewery)
        }
    });
  return (
    <div>
      <p>Name : {data.name}</p>
      <p>Address : {data.address_1}</p>
      <p>Phone : {data.phone}</p>
      <p>Url : {data.website_url}</p>
      <p>City : {data.city}</p>
      <p>State : {data.state}</p>
    </div>
  )
}

export default Brewery
