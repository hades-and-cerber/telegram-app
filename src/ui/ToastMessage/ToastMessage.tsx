import React from 'react';
import { Alert, Snackbar } from '@mui/material';

interface Props {
    isOpen: boolean;
    handleClose: () => void;
    variant: 'success' | 'info' | 'warning' | 'error';
    text: string;
}

const ToastMessage = ({ isOpen, handleClose, text, variant }: Props) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={variant}
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default ToastMessage;
