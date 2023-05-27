import Container from './components/Container'
import {Link} from 'react-router-dom'

function App() {

  return (
    <Container>
      <h1>Home</h1>
      <Link to="/test">Test Page</Link>
    </Container>
  )
}

export default App
