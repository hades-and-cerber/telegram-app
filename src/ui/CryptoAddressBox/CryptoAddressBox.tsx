import React, { useState } from 'react';
import { Box, Button, TextField, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastMessage } from '../ToastMessage';
import QRCode from 'react-qr-code';

interface Props {
    address: string
}

const CryptoAddressBox = ({ address }: Props) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setIsSnackbarOpen(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        gap: 2,
        borderRadius: '8px',
        width: '300px',
        boxShadow: 1
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <QRCode value={address} size={128} />
      </Box>
      <TextField
        value={address}
        variant="outlined"
        fullWidth
        InputProps={{
          readOnly: true,
        }}
      />
      <Tooltip title='Copy to clipboard'>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<ContentCopyIcon />}
          onClick={handleCopy}
        >
            Copy Address
        </Button>
      </Tooltip>
      <ToastMessage
        isOpen={isSnackbarOpen}
        handleClose={() => setIsSnackbarOpen(false)}
        variant="success"
        text="Address copied to clipboard"
      />
    </Box>
  );
};

export default CryptoAddressBox;
