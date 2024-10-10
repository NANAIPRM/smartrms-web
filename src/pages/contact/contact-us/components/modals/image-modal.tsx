import type { FC } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

interface DialogProps {
  onClose?: () => void;
  open?: boolean;
  isLoading?: boolean;
  imageUrl?: string;
}

export const ImageModal: FC<DialogProps> = (props) => {
  const { onClose, open = false, imageUrl = '' } = props;

  useEffect(() => {}, [open]);

  return (
    open && (
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            py: 3,
            position: 'relative',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'primary.main',
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <InnerImageZoom
            src={imageUrl}
            zoomSrc={imageUrl}
          />
        </DialogContent>
      </Dialog>
    )
  );
};

ImageModal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  imageUrl: PropTypes.string,
};
