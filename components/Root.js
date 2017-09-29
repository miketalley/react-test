import _ from 'lodash';
import React from 'react';
import { Container } from 'semantic-ui-react';
import ImageGallery from '../components/ImageGallery';

const fakeData = [
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  },
  {
    src: 'http://www.haemophilia.ie/wp-content/uploads/2015/04/placeholder-1024x640.jpg'
  }
];

const Root = () => {
  return (
    <Container className='hello-world'>
      <h1>NoJazi</h1>
      <p>A simple image gallery</p>
      <ImageGallery images={fakeData} />
    </Container>
  );
}
export default Root;
