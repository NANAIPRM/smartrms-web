import type { FC } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogContent,
    Stack,
    Typography,
    DialogActions,
    Button,
    Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { tokens } from '@renderer/locales/tokens';

interface DialogProps {
    onClose?: () => void;
    open?: boolean;
    isLoading?: boolean;
    confirmCode?: String | null;
}

export const SuccessModal: FC<DialogProps> = (props) => {
    const { onClose, open = false, isLoading, confirmCode } = props;
    const { t } = useTranslation();

    useEffect(() => { }, [open]);

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    py: 3,
                },
            }}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: 90,
                }}
            >
                <CheckCircleOutlineIcon
                    color="success"
                    sx={{ fontSize: 90 }}
                />
            </Box>
            <DialogContent>
                <DialogContent>
                    {confirmCode ? (
                        <Typography align="center">
                            {t(tokens.auth.forgotPassword.referenceCode)}{confirmCode}
                        </Typography>
                    ) : (
                        ''
                    )}
                </DialogContent>
            </DialogContent>
            <DialogActions>
                <Stack
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        size="large"
                        variant="contained"
                        onClick={onClose}
                    >
                        {confirmCode ? (
                            t(tokens.auth.common.ok)
                        ) : (
                            t(tokens.auth.common.success)
                        )}
                    </Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
};

SuccessModal.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
};
