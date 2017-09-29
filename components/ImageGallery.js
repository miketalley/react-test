import _ from 'lodash';
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const COLUMNS_PER_ROW = 4;

const generateColumns = (data) => {
  return data.map((d) => {
    return <Grid.Column>
      <Image {...d} />
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
