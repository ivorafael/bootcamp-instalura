import Text from '../src/components/foundation/Text'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Page404 = () => (
  <div>
    <Text tag="h3" variant="title">Page not found!!!1</Text>
    <img src="https://i.ytimg.com/vi/gArbocrAO78/hqdefault.jpg" alt="Page not found" />
    <hr />
    <nav>
      <Text variant="paragraph1" tag="a" href="/">Back to Home</Text>
    </nav>
  </div>
)

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Page404