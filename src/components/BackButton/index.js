import React from 'react';
import history from '../../utils/history';

import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function BackButton() {  
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={<ArrowBackIosIcon />}
      onClick={() => {history.push('/dashboard')}}
    >
      Back
    </Button>
  )
};

export default BackButton;