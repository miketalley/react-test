import _ from 'lodash';
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import ImageModal from '../components/ImageModal';
import CustomImage from '../components/CustomImage';

const COLUMNS_PER_ROW = 4;

const generateColumns = (data) => {
  return data.map((d, i) => {
    return <Grid.Column key={i}>
      <ImageModal image={d}>
        <CustomImage {...d} />
      </ImageModal>
    </Grid.Column>
  });
};

const ImageGallery = (props) => {
  const columns = generateColumns(props.images);

  return (
    <Grid columns={COLUMNS_PER_ROW}>
      {columns}
    </Grid>
  );
};

export default ImageGallery;
