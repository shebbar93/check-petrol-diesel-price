//Refer https://github.com/bradtraversy/wildfire-tracker
import Map from './components/Map'
import Loader from './components/Loader'
import { useEffect, useState } from 'react'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchEvents = async () => {
    setLoading(true)
    const res = await fetch('https://mfapps.indiatimes.com/ET_Calculators/oilpricebycitystate.htm');
    const { results } = await res.json();
    setEventData(results)
    setLoading(false)
  }
  useEffect(() => {
    fetchEvents();
  }, [])

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
