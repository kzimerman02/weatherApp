import React, {useState} from 'react';
import axios from 'axios'



function App() {

  const [data,setData] = useState({});
  const [location, setLocation] = useState('');
  const api = `http://api.weatherapi.com/v1/current.json?key=38ff18bc62d54444965164650220512&q=${location}`

  const searchBarPress = (e) => {
    if (e.key ==='Enter') {
      axios.get(api).then((response) => {
        setData(response.data)
        //console.log(response.data);
      })
      setLocation('')
    }
  }

  return (
    <div className='main'>
      <div className='container'>
        <div className='top'>
          
          <div className='loc'>
            {data.location ? <p> {data.location.name}, {data.location.country} </p> : null}
          </div>
          <div className='temp'>
            <h1>{data.current ? <p> {data.current.temp_c}℃</p> : null}</h1>
          </div>
        </div>

        <div className='searchbar'>
          <input 
          type="text"
          placeholder="Type your location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchBarPress}
          
          />
        </div>

        {data.location != undefined &&
          <div className='bottom'>
            <div className='botborder'>
              <div className='feelslike'>
                {data.current ?<p>Feels like: {data.current.feelslike_c}℃</p> : null}
              </div>
              <div className='hum'>
                {data.current ? <p>Humidity: {data.current.humidity}%</p> : null}
              </div>
              <div className='wind'>
                {data.current ? <p>Wind: {data.current.wind_kph} km/h</p> : null}
              </div>
            </div>
          </div>
      }

        

        
      </div>
    </div>
  )
}

export default App;