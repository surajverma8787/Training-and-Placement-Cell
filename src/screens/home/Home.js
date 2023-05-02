import './Home.css'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()

  const addChannel = () => {
    history.push('/add/channel')
  }

  return (
    <div className="home">
      <div className="home__container">
        <img src="/logo.png" alt="IET Logo" />
        <h1>Training Placement Cell, IET Lucknow</h1>
        <p>
          This platform has been created to consolidate the placement procedure for IET Lucknow.
        </p>

        {/* <p>
          Our aim is to make your working life simpler, more pleasant and more
          productive.
        </p> */}

        {/* <Button onClick={addChannel}>Create Channel</Button> */}
      </div>
    </div>
  )
}

export default Home
