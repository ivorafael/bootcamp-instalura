import Menu from '../src/components/commons/Menu'
import Footer from '../src/components/commons/Footer/Footer'
import Text from '../src/components/foundation/Text'
import Button from '../src/components/commons/Button/Button'
import { GridContainer, GridRow, GridCol } from '../src/components/foundation/layout/Grid'
import { Box } from '../src/components/foundation/layout/Box'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Home = () => (

  <Box
    flex="1"
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    justifyContent="space-between"
    backgroundImage="url(/images/bubbles.svg)"
    backgroundRepeat="no-repeat"
    backgroundPosition="bottom right">

    <Menu />

    <GridContainer marginTop={ { xs: '32px', md: '75px' } }>
      <GridRow>
        <GridCol
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          offset={ { xs: 0, md: 1 } }
          value={ { xs: 12, md: 5 } }>
          <Text variant="title" tag="h1" color="tertiary.main" textAlign={ {
            xs: 'center',
            md: 'left',
          } }>
            Compartilhe momentos e conecte-se com amigos
          </Text>

          <Text variant="paragraph1" tag="p" color="tertiary.light" textAlign={ {
            xs: 'center',
            md: 'left',
          } }>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </Text>

          <Button variant="primary.main" display="block" margin={ {
            xs: 'auto',
            md: 'initial',
          } }>
            Cadastrar
          </Button>
        </GridCol>

        <GridCol value={ { xs: 12, md: 6 } }>
          <img
            style={ { display: 'block', margin: 'auto' } }
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </GridCol>
      </GridRow>
    </GridContainer>
    <Footer />
  </Box>

)

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default Home