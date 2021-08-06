import React from 'react';
import Text from '../src/components/foundation/Text';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const PageAbout = () => (
  <div>
    <Text tag="h3" variant="title">Sobre</Text>
    <Text tag="p" variant="paragraph1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem odio ipsam eos deleniti ea, itaque voluptate, voluptates consequatur tenetur placeat perferendis repellendus quasi eveniet nemo pariatur laudantium, maiores laboriosam.</Text>
    <hr />
    <nav>
      <Text variant="paragraph1" tag="a" href="/">Back to Home</Text>
    </nav>
  </div>
);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default PageAbout;
