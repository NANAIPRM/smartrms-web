import { Card, CardContent, CardHeader, Typography, Link, Paper, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLine } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ImageModal } from './components/modals/image-modal';
import { useState } from 'react';
import { useRouter } from '@hooks/user-router';
import { paths } from '@renderer/paths';
import { useTranslation } from 'react-i18next';
import { tokens } from '@renderer/locales/tokens';
import { neutral } from '@renderer/theme/color';

const ContactUsPage = () => {
    const [isImageModalOpen, setImageModalOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const router = useRouter();
    const { t } = useTranslation();

    const Item = styled(Paper)(() => ({
        boxShadow: 'none',
    }));

    const handleImageModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setImageModalOpen(true);
    };

    const closeImageModal = () => {
        setImageModalOpen(false);
        setSelectedImage('');
    };

    return (
        <>
            <ImageModal
                open={isImageModalOpen}
                onClose={closeImageModal}
                imageUrl={selectedImage}
            />
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                paddingY="30px"
                gap="8px"
            >
                <Typography variant="h6">{t(tokens.contact.contactUs)}</Typography>
                <Typography>|</Typography>
                <FontAwesomeIcon
                    icon={faHome}
                    onClick={() => router.push(paths.home)}
                    style={{
                        cursor: 'pointer',
                    }}
                />
            </Box>

            <Card
                elevation={14}
                sx={{
                    marginBottom: '30px',
                    display: { xs: 'block', lg: 'flex' },
                    justifyContent: { xs: 'normal', lg: 'center' },
                    alignItems: { xs: 'normal', lg: 'center' },
                }}
            >
                <CardContent>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Item>
                                <Card variant="outlined">
                                    <CardHeader
                                        title={t(tokens.contact.contact)}
                                        sx={{ backgroundColor: 'primary.main', color: neutral[50], padding: 2 }}
                                    />
                                    <CardContent
                                        sx={{
                                            padding: 2,
                                        }}
                                    >
                                        <Link
                                            href="tel:02-026-1911"
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': {
                                                    color: 'black',
                                                    '& .typography': {
                                                        color: 'black',
                                                    },
                                                },
                                            }}
                                        >
                                            <Grid
                                                container
                                                alignItems="start"
                                                spacing={1}
                                                sx={{ mb: 1 }}
                                            >
                                                <Item>
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </Item>
                                                <Item>
                                                    <Typography
                                                        className="typography"
                                                        sx={{ color: 'primary.main' }}
                                                    >
                                                        09.00-18.00 น.
                                                    </Typography>
                                                    <Typography
                                                        className="typography"
                                                        sx={{ color: 'primary.main' }}
                                                    >
                                                        (ในวันและเวลาทำการ ยกเว้นเสาร์ อาทิตย์ และวันหยุด นักขัตฤกษ์)
                                                    </Typography>
                                                    <Typography
                                                        className="typography"
                                                        sx={{ color: 'primary.main' }}
                                                    >
                                                        02-026-1911
                                                    </Typography>
                                                </Item>
                                            </Grid>
                                        </Link>

                                        <Link
                                            href="https://www.facebook.com/SmartRMS"
                                            target="_blank"
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': {
                                                    color: 'black',
                                                    '& .typography': {
                                                        color: 'black',
                                                    },
                                                },
                                            }}
                                        >
                                            <Grid
                                                container
                                                alignItems="center"
                                                spacing={1}
                                                sx={{ mb: 1 }}
                                            >
                                                <Item>
                                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                                </Item>
                                                <Item>
                                                    <Typography
                                                        className="typography"
                                                        sx={{ color: 'primary.main' }}
                                                    >
                                                        https://www.facebook.com/SmartRMS
                                                    </Typography>
                                                </Item>
                                            </Grid>
                                        </Link>

                                        <Link
                                            href="mailto:support@smartrms.net"
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': {
                                                    color: 'black',
                                                    '& .typography': {
                                                        color: 'black',
                                                    },
                                                },
                                            }}
                                        >
                                            <Grid
                                                container
                                                alignItems="center"
                                                spacing={1}
                                                sx={{ mb: 1 }}
                                            >
                                                <Item>
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </Item>
                                                <Item>
                                                    <Typography
                                                        className="typography"
                                                        sx={{ color: 'primary.main' }}
                                                    >
                                                        support@smartrms.net
                                                    </Typography>
                                                </Item>
                                            </Grid>
                                        </Link>

                                        <Link
                                            href="http://line.me/ti/p/~@SmartRMS"
                                            target="_blank"
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': {
                                                    color: 'black',
                                                    '& .typography': {
                                                        color: 'black',
                                                    },
                                                },
                                            }}
                                        >
                                            <Grid
                                                container
                                                alignItems="center"
                                                spacing={1}
                                                sx={{ mb: 1 }}
                                            >
                                                <Item>
                                                    <FontAwesomeIcon icon={faLine} />
                                                </Item>
                                                <Item>
                                                    <Typography
                                                        className="typography"
                                                        sx={{ color: 'primary.main' }}
                                                    >
                                                        @SmartRMS
                                                    </Typography>
                                                </Item>
                                            </Grid>
                                        </Link>

                                        <Link
                                            href="http://www.smartzoneonline.com/smartrms/"
                                            target="_blank"
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': {
                                                    color: 'black',
                                                    '& .typography': {
                                                        color: 'black',
                                                    },
                                                },
                                            }}
                                        >
                                            <Grid
                                                container
                                                alignItems="center"
                                                spacing={1}
                                            >
                                                <Item>
                                                    <FontAwesomeIcon icon={faGlobe} />
                                                </Item>
                                                <Item>
                                                    <Typography
                                                        className="typography"
                                                        sx={{ color: 'primary.main' }}
                                                    >
                                                        www.smartzoneonline.com/smartrms
                                                    </Typography>
                                                </Item>
                                            </Grid>
                                        </Link>
                                    </CardContent>
                                </Card>

                                <Card
                                    variant="outlined"
                                    sx={{ mt: 1 }}
                                >
                                    <CardHeader
                                        title={t(tokens.contact.address)}
                                        sx={{
                                            backgroundColor: 'primary.main',
                                            color: neutral[50],
                                            padding: 2,
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            padding: 2,
                                        }}
                                    >
                                        <Typography>
                                            บริษัท ซอร์สโค้ด จำกัด
                                            <br />
                                            เลขที่ 75/62, 75/63, 75/64, 75/65 อาคาร บีเคซีเอส กรุ๊ป
                                            <br />
                                            ซอยรามคำแหง 21 ถนนรามคำแหง แขวงหัวหมาก
                                            <br />
                                            เขตบางกะปิ กรุงเทพมหานคร 10240
                                            <br />
                                            โทร. 02-026-1922
                                            <br />
                                            แฟกซ์. 02-026-1921, 02-026-1912
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Item>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Item>
                                <Card variant="outlined">
                                    <CardHeader
                                        title={t(tokens.contact.map)}
                                        sx={{ backgroundColor: 'primary.main', color: neutral[50], padding: 2 }}
                                    />

                                    <CardContent
                                        sx={{
                                            padding: 2,
                                        }}
                                    >
                                        <Link
                                            onClick={() =>
                                                handleImageModal(
                                                    'https://smartrms.s3.ap-southeast-1.amazonaws.com/d2d1e1f0-dbf9-11e8-8757-dff962dff5d9new-ss-map.jpg'
                                                )
                                            }
                                            color="inherit"
                                        >
                                            <img
                                                src="https://smartrms.s3.ap-southeast-1.amazonaws.com/d2d1e1f0-dbf9-11e8-8757-dff962dff5d9new-ss-map.jpg"
                                                alt="map"
                                                style={{ width: '100%', cursor: 'pointer', borderRadius: '8px' }}
                                            />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Item>
                            <Item></Item>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};

export default ContactUsPage;
