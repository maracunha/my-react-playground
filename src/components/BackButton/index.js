import React from 'react';

import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function BackButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={<ArrowBackIosIcon />}
    >
      Back
    </Button>
  );
}

export default BackButton;
