import React,{useState} from 'react'
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchBy, setsearchBy] = useState("name")
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        setsearchBy(selectedValue);
    };
    const handleSearchChange = async(e) => {
        const value = e.target.value;
        setSearchTerm(value);
        let url = "https://api.openbrewerydb.org/v1/breweries";
        if(searchBy==="city"){
            url = url + "?by_city=" + value;
        }else if(searchBy==="name"){
            url = url + "?by_name=" + value;
        }else {
            url = url + "?by_type=" + value;
        }
        try {
        setLoading(true);
        const response = await axios.get(url);
        console.log(response.data)
        setSearchResults(response.data);
        } catch (error) {
        console.error('Error fetching data:', error);
        } finally {
        setLoading(false);
        }
    }
    const navigate = useNavigate();
    const handleBrewery = (data) =>{
        navigate("/brewery-details", {state:{brewery:data}})
    }

  return (
    <div>
      <label>
        Select an option:
        <select value={searchBy} onChange={handleDropdownChange}>
          <option value="city">By City</option>
          <option value="name">By Name</option>
          <option value="type">By Type</option>
        </select>
      </label>
      <div>
        <label>
            Search:
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Enter search term"
            />
            </label>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {searchResults.map((result) => (
              <div class="card">
                <div class="card-content" onClick={()=>{handleBrewery(result)}}>
                    <div class="card-title">Brewery Details</div>
                    <p class="card-text">Name : {result.name}</p>
                    <p class="card-text">Address : {result.address_1}</p>
                    <p class="card-text">Phone : {result.phone}</p>
                    <p class="card-text">Url : {result.website_url}</p>
                    {/* <p class="card-text">Rating : {}</p> */}
                    <p class="card-text">City : {result.city}</p>
                    <p class="card-text">State : {result.state}</p>
                </div>
             </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Search

