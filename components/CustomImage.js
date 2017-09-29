import React from 'react';
import { Image } from 'semantic-ui-react';

const CustomImage = (props) => {
  return (
    <Image src={props.image.src} />
  );
};

export default CustomImage;
