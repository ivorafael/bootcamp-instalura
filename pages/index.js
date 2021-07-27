import Title from '../components/Title'
import Text from '../components/Text'
import LinkButton from '../components/LinkButton'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Home = () => (
  <div>
    <Title>My page</Title>
    <Text>Hot reload :burn:</Text>
    <hr />
    <nav>
      <ul>
        <li><LinkButton href="/about">About page</LinkButton></li>
        <li><LinkButton href="/erou">404 page</LinkButton></li>
      </ul>
    </nav>
  </div>
)

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Home