import Title from '../components/Title'
import Text from '../components/Text'
import LinkButton from '../components/LinkButton'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const PageAbout = () => (
  <div>
    <Title>About</Title>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem odio ipsam eos deleniti ea, itaque voluptate, voluptates consequatur tenetur placeat perferendis repellendus quasi eveniet nemo pariatur laudantium, maiores laboriosam.</Text>
    <hr />
    <nav>
      <LinkButton href="/">Back to Home</LinkButton>
    </nav>
  </div>
)

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default PageAbout