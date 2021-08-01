import Title from '../src/components/Title'
import LinkButton from '../src/components/LinkButton'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Page404 = () => (
  <div>
    <Title>Page not found!!!1</Title>
    <img src="https://i.ytimg.com/vi/gArbocrAO78/hqdefault.jpg" alt="Page not found" />
    <hr />
    <nav>
      <LinkButton href="/">Back to Home</LinkButton>
    </nav>
  </div>
)

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Page404