import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from '@hooks/user-router';
import { Box, Card, CardContent, Paper, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { paths } from '@renderer/paths';
import InfoCard from '../../components/info-card';

const PrivacyPolicyPage = () => {
  const router = useRouter();

  const Item = styled(Paper)(() => ({
    boxShadow: 'none',
  }));

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        paddingY="30px"
        gap="8px"
      >
        <Typography variant="h6">Privacy Policy</Typography>
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
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={2}
          >
            <Grid size={{ xs: 12 }}>
              <Item>
                <Box sx={{ padding: 2 }}>
                  SourceCode Co., Ltd. built the SmartRMS app as a Commercial app. This SERVICE is
                  provided by SourceCode Co., Ltd. and is intended for use as is. This page is used
                  to inform visitors regarding our policies with the collection, use, and disclosure
                  of Personal Information if anyone decided to use our Service. If you choose to use
                  our Service, then you agree to the collection and use of information in relation
                  to this policy. The Personal Information that we collect is used for providing and
                  improving the Service. We will not use or share your information with anyone
                  except as described in this Privacy Policy. The terms used in this Privacy Policy
                  have the same meanings as in our Terms and Conditions, which is accessible at
                  SmartRMS unless otherwise defined in this Privacy Policy.
                </Box>

                <InfoCard title="Information Collection and Use">
                  <Typography>
                    For a better experience, while using our Service, we may require you to provide
                    us with certain personally identifiable information, including but not limited
                    to Name - Lastname, Age, Address, ID card number or Passport number, Email,
                    Phone Number. The information that we request will be retained by us and used as
                    described in this privacy policy.
                  </Typography>
                  <Typography>
                    The app does use third-party services that may collect information used to
                    identify you.
                  </Typography>
                  <Typography>
                    Link to privacy policy of third-party service providers used by the app
                  </Typography>
                  <Box sx={{ marginLeft: '20px' }}>
                    <li>
                      <a href="https://policies.google.com/privacy">Google Play Services</a>
                    </li>
                    <li>
                      <a href="https://firebase.google.com/policies/analytics">
                        Firebase Analytics
                      </a>
                    </li>
                  </Box>
                  <Typography sx={{ fontWeight: 600 }}>Log Data</Typography>
                  <Typography>
                    We want to inform you that whenever you use our Service, in case of an error in
                    the app we collect data and information (through third-party products) on your
                    phone called Log Data. This Log Data may include information such as your device
                    Internet Protocol (“IP”) address, device name, operating system version, the
                    configuration of the app when utilizing our Service, the time and date of your
                    use of the Service, and other statistics.
                  </Typography>
                </InfoCard>

                <InfoCard title="Cookies">
                  <Typography>
                    Cookies are files with a small amount of data that are commonly used as
                    anonymous unique identifiers. These are sent to your browser from the websites
                    that you visit and are stored on your device's internal memory.
                  </Typography>
                  <Typography>
                    This Service does not use these “cookies” explicitly. However, the app may use
                    third-party code and libraries that use “cookies” to collect information and
                    improve their services. You have the option to either accept or refuse these
                    cookies and know when a cookie is being sent to your device. If you choose to
                    refuse our cookies, you may not be able to use some portions of this Service.
                  </Typography>
                </InfoCard>

                <InfoCard title="Service Providers">
                  <Typography>
                    We may employ third-party companies and individuals due to the following
                    reasons:
                  </Typography>
                  <Box sx={{ marginLeft: '20px', fontSize: '13px' }}>
                    <li>To facilitate our Service</li>
                    <li>To provide the Service on our behalf</li>
                    <li>To perform Service-related services or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                  </Box>
                  <Typography>
                    We want to inform users of this Service that these third parties have access to
                    your Personal Information. The reason is to perform the tasks assigned to them
                    on our behalf. However, they are obligated not to disclose or use the
                    information for any other purpose.
                  </Typography>
                </InfoCard>

                <InfoCard title="Security">
                  <Typography sx={{ fontWeight: 600 }}>Security</Typography>
                  <Typography>
                    We value your trust in providing us your Personal Information, thus we are
                    striving to use commercially acceptable means of protecting it. But remember
                    that no method of transmission over the internet, or method of electronic
                    storage is 100% secure and reliable, and we cannot guarantee its absolute
                    security.
                  </Typography>
                </InfoCard>

                <InfoCard title="Links to Other Sites">
                  <Typography sx={{ fontWeight: 600 }}>Links to Other Sites</Typography>
                  <Typography>
                    This Service may contain links to other sites. If you click on a third-party
                    link, you will be directed to that site. Note that these external sites are not
                    operated by us. Therefore, we strongly advise you to review the Privacy Policy
                    of these websites. We have no control over and assume no responsibility for the
                    content, privacy policies, or practices of any third-party sites or services.
                  </Typography>
                </InfoCard>

                <InfoCard title="Children’s Privacy">
                  <Typography sx={{ fontWeight: 600 }}>Children’s Privacy</Typography>
                  <Typography>
                    These Services do not address anyone under the age of 13. We do not knowingly
                    collect personally identifiable information from children under 13. In the case
                    we discover that a child under 13 has provided us with personal information, we
                    immediately delete this from our servers. If you are a parent or guardian and
                    you are aware that your child has provided us with personal information, please
                    contact us so that we will be able to do the necessary actions.
                  </Typography>
                </InfoCard>

                <InfoCard title="Changes to This Privacy Policy">
                  <Typography sx={{ fontWeight: 600 }}>Changes to This Privacy Policy</Typography>
                  <Typography>
                    We may update our Privacy Policy from time to time. Thus, you are advised to
                    review this page periodically for any changes. We will notify you of any changes
                    by posting the new Privacy Policy on this page. These changes are effective
                    immediately after they are posted on this page.
                  </Typography>
                </InfoCard>

                <InfoCard title="Contact Us">
                  <Typography>
                    If you have any questions or suggestions about our Privacy Policy, do not
                    hesitate to contact us at 75/62, 75/63, 75/64, 75/65, BKCS group building Soi
                    Ramkhamhaeng 21, Ramkhamhaeng Road, Hua Mak Bang Kapi District, Bangkok 10240.
                  </Typography>
                </InfoCard>
              </Item>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default PrivacyPolicyPage;
