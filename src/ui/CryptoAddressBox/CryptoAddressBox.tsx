import React, { useState } from 'react';
import { Box, Button, TextField, Tooltip, useTheme } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastMessage } from '../ToastMessage';
import QRCode from 'react-qr-code';

interface Props {
    address: string
}

const CryptoAddressBox = ({ address }: Props) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const theme = useTheme();

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
        width: '300px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <QRCode bgColor={theme.palette.background.paper} value={address} size={128} />
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
