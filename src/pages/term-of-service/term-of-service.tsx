import InfoCard from '@components/info-card';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from '@hooks/user-router';
import { Box, Card, CardContent, Link, Paper, Stack, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { paths } from '@renderer/paths';

const TermOfServicePage = () => {
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
        <Typography variant="h6">ข้อตกลงและเงื่อนไขการให้บริการ</Typography>
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
                <Stack sx={{ padding: 2, gap: '10px' }}>
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                      fontWeight: '700',
                    }}
                  >
                    โปรดอ่านและทำความเข้าใจข้อตกลงและเงื่อนไขการให้บริการนี้อย่างละเอียด
                    การที่ผู้ใช้งานได้ติดตั้ง และ/หรือเข้าใช้งานแอพพลิเคชั่นนี้ หรือเว็บไซต์นี้แล้ว
                    ถือว่าผู้ใช้งานตกลงยอมรับข้อกำหนดที่ระบุในข้อตกลงและเงื่อนไขการให้บริการนี้แล้วทุกประการ
                    หากผู้ใช้งานไม่สามารถยอมรับข้อตกลงและเงื่อนไขการให้บริการนี้ได้
                    ขอให้ผู้ใช้งานปฏิเสธการใช้งานแอพพลิเคชั่นโดยถอนการติดตั้งแอพพลิเคชั่นจากเครื่องโทรศัพท์เคลื่อนที่/
                    อุปกรณ์ดิจิตอลของผู้ใช้งานทันที หรือยกเลิกการลงทะเบียนเพื่อเข้าใช้งานทันที
                  </Typography>
                  <Stack sx={{ gap: '10px' }}>
                    <Typography
                      sx={{
                        fontWeight: '700',
                        fontSize: '18px',
                        color: 'primary.main',
                      }}
                    >
                      วัตถุประสงค์ของข้อตกลงและเงื่อนไขการให้บริการ
                    </Typography>
                    <Typography
                      sx={{
                        textIndent: '20px',
                        lineHeight: 1.5,
                        overflowWrap: 'break-word',
                        fontWeight: '700',
                      }}
                    >
                      SmartRMS
                      ได้จัดทำข้อตกลงและเงื่อนไขการให้บริการฉบับนี้ขึ้นเพื่ออธิบายวิธีการที่เราใช้รวบรวม
                      เก็บ ประมวลผล เปิดเผย และโอน "ข้อมูลส่วนบุคคล" ของคุณ เมื่อคุณเยี่ยมชม
                      "เว็บไซต์" หรือใช้ "บริการ" ของเรา "ข้อตกลงและเงื่อนไขการให้บริการ" นี้มีผลกับ
                      "ข้อมูลส่วนบุคคล" ของคุณเมื่อคุณเยี่ยมชม "เว็บไซต์" หรือใช้ "บริการ"
                    </Typography>
                    <Typography
                      sx={{
                        textIndent: '20px',
                        lineHeight: 1.5,
                        overflowWrap: 'break-word',
                        fontWeight: '700',
                      }}
                    >
                      “ข้อมูลส่วนบุคคล” หมายถึง
                      ข้อมูลเกี่ยวกับบุคคลไม่ว่าจริงหรือเท็จที่สามารถใช้เป็นข้อมูลที่ระบุตัวตนของบุคคลผู้นั้น
                      หรือจากข้อมูลดังกล่าวหรือข้อมูลอื่นๆ ที่องค์กรมีหรืออาจสามารถเข้าถึงได้
                      ตัวอย่างข้อมูลส่วนบุคคลที่พบบ่อยได้แก่ ชื่อ หมายเลขประจำตัวประชาชน
                      และข้อมูลการติดต่อ
                    </Typography>
                  </Stack>
                </Stack>

                <InfoCard title="SmartRMS จะเก็บรวบรวมข้อมูลส่วนบุคคลเมื่อ">
                  <Stack sx={{ marginLeft: '20px', gap: '10px' }}>
                    <Typography>
                      (ก) ผู้ใช้เข้าถึงและ/หรือใช้บริการของเรา หรือลงทะเบียน สมัครบัญชีผู้ใช้กับเรา
                    </Typography>
                    <Typography>
                      (ข) ผู้ใช้งานส่งแบบฟอร์ม การสมัครหรือแบบฟอร์มอื่นๆ
                      ที่เกี่ยวข้องกับผลิตภัณฑ์และบริการของเรา ไม่ว่าจะแบบออนไลน์
                      การแจ้งข้อมูลเพื่อสมัครใช้บริการ หรือแบบฟอร์มเป็นเอกสาร
                      รวมทั้งการสร้างบัญชีผู้ใช้งานโดยผ่านบุคคลอื่น ที่ผู้ใช้งานให้ข้อมูล
                    </Typography>
                    <Typography>
                      (ฃ) ผู้ใช้ ใช้บริการแสดงความคิดเห็น หรือคำร้องเรียนแก่เรา หรือ
                      ผู้ใช้งานผู้ใช้งานอื่น
                    </Typography>
                    <Typography>
                      (ค) ผู้ใช้เชื่อมต่อบัญชีกับเว็บไซต์ หรือบริการของบุคคลภายนอกกับเรา
                    </Typography>
                    <Typography>(ฅ) ผู้ใช้ดำเนินธุรกรรมผ่านบริการของเรา</Typography>
                    <Typography>
                      (ฆ) ผู้ใช้ทำข้อตกลงใดๆ
                      หรือให้เอกสารหรือข้อมูลอื่นใดที่เกี่ยวข้องกับการติดต่อระหว่างคุณกับเรา
                      หรือเมื่อคุณใช้ผลิตภัณฑ์และบริการของเรา
                    </Typography>
                    <Typography>
                      (ง) ใช้บริการทางอิเล็กทรอนิกส์ การใช้ผ่านคุกกี้
                      ซึ่งเราอาจปรับใช้เมื่อคุณใช้บริการหรือเข้าถึง
                    </Typography>
                  </Stack>
                </InfoCard>

                <InfoCard title="ข้อมูลส่วนบุคคลที่ SmartRMS อาจเก็บรวบรวมนั้นจะรวมถึงแต่ไม่จำกัดเพียง">
                  <Stack sx={{ marginLeft: '20px', gap: '10px' }}>
                    <Typography>(ก) ชื่อ</Typography>
                    <Typography>(ข) นามสกุล</Typography>
                    <Typography>(ฃ) ชื่อเล่น</Typography>
                    <Typography>(ค) ที่อยู่</Typography>
                    <Typography>(ฅ) เบอร์โทรศัพท์</Typography>
                    <Typography>(ฆ) เลขประจำตัวประชาชน/เลขพาสปอร์ต</Typography>
                    <Typography>(ง) เลขประจำตัวผู้เสียภาษี</Typography>
                    <Typography>(จ) เพศ</Typography>
                    <Typography>(ฉ) วัน/เดือน/ปีเกิด</Typography>
                    <Typography>(ช) อีเมล</Typography>
                    <Typography>(ซ) ที่อยู่อินเตอร์เน็ต</Typography>
                    <Typography>(ฉ) ทะเบียนรถ</Typography>
                    <Typography>
                      (ญ) รูปถ่ายส่วนตัว และ/หรือ รูปที่ทำการอัพโหลดเข้าสู่ระบบ
                    </Typography>
                    <Typography>(ฎ) ข้อมูลที่มีการนำเข้าระบบ และไฟล์การใช้งานระบบ</Typography>
                  </Stack>
                </InfoCard>

                <InfoCard title="SmartRMS รวบรวมข้อมูลเกี่ยวกับอุปกรณ์ของคุณ">
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    เมื่อคุณใช้เว็บไซต์หรือแอพพลิเคชั่น SmartRMS รวบรวมและจัดเก็บข้อมูล
                    พื้นที่การจัดเก็บข้อมูลในตัวเครื่อง
                    รวมถึงข้อมูลส่วนบุคคลที่อยู่ในอุปกรณ์ของผู้ใช้งาน โดยใช้วิธีการต่างๆ เช่น
                    พื้นที่จัดเก็บข้อมูลเว็บบราวเซอร์ และแคชของข้อมูลแอพพลิเคชั่น
                    เราจะเก็บรวบรวมและวิเคราะห์ข้อมูลบางอย่างโดยอัตโนมัติซึ่งรวมถึงเบราว์เซอร์ที่ชี้เฉพาะเจาะจง
                    ที่อยู่ IP เบราว์เซอร์และข้อมูลเกี่ยวกับระบบปฏิบัติการ อุปกรณ์ที่ชี้เฉพาะเจาะจง
                    ตำแหน่งทางภูมิศาสตร์และข้อมูลที่ชี้เฉพาะถึงอุปกรณ์อื่น ๆ
                    ข้อมูลเกี่ยวกับอินเทอร์เน็ต
                    รวมถึงรายละเอียดเกี่ยวกับธุรกรรมของคุณที่เกิดขึ้นบนเว็บไซต์และแอพพลิเคชั่น
                    ของเรา
                  </Typography>
                </InfoCard>

                <InfoCard title="SmartRMS และการเปิดเผยข้อมูลที่เรารวบรวม">
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    (ก) เราอาจแบ่งปันข้อมูลตามกฎหมายหรือคำขออย่างเป็นทางการของหน่วยงานของรัฐ
                    รัฐบาลท้องถิ่น หรือบุคคลหรือผู้ประกอบการที่ได้รับมอบหมายให้ทำกิจการต่างๆ
                    ตามที่กฎหมายหรือกฎระเบียบกำหนด
                  </Typography>
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    (ข) เราอาจแบ่งปันข้อมูลที่ไม่อาจระบุตัวตนของคุณกับบริษัท
                    ซึ่งถือเป็นส่วนหนึ่งในการดำเนินธุรกิจตามปกติของ SmartRMS
                  </Typography>
                </InfoCard>

                <InfoCard title="SmartRMS และกฎหมายที่ใช้บังคับ">
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    กฎหมายที่ใช้บังคับตามเงื่อนไขและข้อตกลงในการใช้บริการ คือ กฎหมายแห่งประเทศไทย
                    และศาลแห่งประเทศไทยจะมีเขตอำนาจศาลจำเพาะในกรณีที่มีข้อพิพาทใด ๆ เกิดขึ้น
                  </Typography>
                </InfoCard>

                <InfoCard title="SmartRMS และการรับประกัน">
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    SmartRMS นำเสนอข้อมูลและส่วนประกอบต่างๆ
                    ที่มีอยู่ในเว็บไซต์และแอพพลิเคชั่นนี้เพื่อให้ข้อมูลตามที่ปรากฏอยู่หรือที่มีอยู่เท่านั้น
                    แม้ว่า SmartRMS
                    จะได้ใช้ความพยายามทุกวิถีทางเพื่อทำให้ข้อมูลและส่วนประกอบนั้นมีความถูกต้องมากที่สุด
                    SmartRMS ก็ไม่สามารถรับประกันว่าข้อมูลและส่วนประกอบดังกล่าวมีความถูกต้อง
                    สมบูรณ์เพียงพอ เหมาะสมกับวัตถุประสงค์ใดโดยเฉพาะ
                    และปราศจากโปรแกรมที่ไม่พึงประสงค์หรือส่วนประกอบที่เป็นอันตรายอื่น ๆ นอกจากนี้
                    SmartRMS ไม่ขอดำเนินการแทน หรือรับประกัน ส่งเสริม ยืนยัน
                    หรือยอมรับผิดชอบต่อแอปพลิเคชันของบุคคลที่สาม (หรือเนื้อหาในนั้น)
                    เนื้อหาของผู้ใช้ อุปกรณ์หรือผลิตภัณฑ์อื่น หรือบริการมีการโฆษณา สนับสนุน
                    หรือนำเสนอโดยบุคคลที่สาม บนหรือผ่านบริการของ SmartRMS
                    หรือเว็บไซต์ที่มีไฮเปอร์ลิงก์ใดๆ หรือที่แสดงอยู่บนป้ายประกาศหรือการโฆษณาอื่น ๆ
                    ทั้งนี้ SmartRMS จะไม่รับผิดสำหรับความผิดพลาดหรือการละเว้นใดๆ
                    ในข้อมูลและส่วนประกอบนั้น
                  </Typography>
                </InfoCard>

                <InfoCard title="SmartRMS และข้อสงวนสิทธิในการปฏิเสธความรับผิด">
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    การใช้บริการ และเนื้อหาข้อมูลของคุณเป็นความเสี่ยงของคุณแต่เพียงผู้เดียว
                    เว้นแต่จะกำหนดไว้ในข้อตกลงนี้ เท่าที่กฎหมายที่ใช้บังคับจะกำหนดอย่างกว้างที่สุด
                    SmartRMS ธุรกิจในเครือ หรือผู้ให้บริการบุคคลที่สาม, ผู้ให้อนุญาตใช้สิทธิ
                    ปฎิเสธความรับผิดชอบต่อการให้คำรับรองใดๆ ไม่ว่าจะโดยชัดแจ้งหรือปริยาย,
                    รวมทั้งคำรับรองใดๆ ว่าบริการเหมาะกับวัตถุประสงค์, กรรมสิทธิ์, การค้า,
                    ข้อมูลสูญเสีย, การละเมิดทรัพย์สินทางปัญญาใดๆ เป็นการเฉพาะเจาะจง
                  </Typography>
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    SmartRMS ไม่รับผิดชอบต่อความเสียหาย ค่าใช้จ่าย หรือความสูญเสีย
                    ที่อาจเกิดขึ้นจากการใช้เว็บไซต์หรือแอพพลิเคชั่น และ/หรือเว็บไซต์
                    แอพพลิเคชั่นที่เชื่อมโยงกับ SmartRMS ซึ่งรวมถึงจากความไม่ถูกต้องแม่นยำของข้อมูล
                    ความล่าช้าในการถ่ายโอนข้อมูล ระยะเวลาในการเผยแพร่ข้อมูล
                    เหตุขัดข้องหรืออุปสรรคของการเชื่อมต่อ ความผิดพลาดในการแสดงผล ความเสถียรของระบบ
                    ไวรัสคอมพิวเตอร์
                  </Typography>
                </InfoCard>

                <InfoCard title="SmartRMS และระยะเวลาการเก็บข้อมูลและการเข้าถึงการใช้งาน">
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    เราจะเก็บรักษาข้อมูลต่าง ๆ
                    ตราบเท่าที่จำเป็นในการดำเนินธุรกิจของเราหรือตามที่กำหนดไว้ตามกฎหมายของประเทศไทย
                  </Typography>
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    กรณีที่ผู้ใช้งาน สมัครใช้บริการ และ/หรือไม่มีการใช้งานระบบในระยะเวลาที่กำหนด
                    และ/หรือ กระทำการใด ๆ อันเป็นผลให้ SmartRMS ได้รับความเสียหาย
                    หรือกระทบผู้ใช้งานอื่น ๆ ผู้ใช้งานจะไม่สามารถเข้าใช้งานระบบได้อีก โดยที่
                    SmartRMS ไม่ได้แจ้งให้ผู้ใช้งานทราบล่วงหน้า SmartRMS
                    อาจทำการยกเลิกข้อตกลงหรือระงับสิทธิ์ในการเข้าถึงบริการของ SmartRMS เมื่อใดก็ได้
                    ซึ่งท่านสามารถศึกษารายละเอียด{' '}
                    <Link
                      href="cancellation-policies"
                      sx={{ fontWeight: 700, color: 'text.primary' }}
                    >
                      ข้อกำหนดการยกเลิกการให้บริการ
                    </Link>{' '}
                    ก่อนเริ่มใช้บริการ
                  </Typography>
                </InfoCard>
                <InfoCard title="SmartRMS มีวิธีการใช้ข้อมูลที่คุณให้แก่เราอย่างไรบ้าง">
                  <Stack sx={{ marginLeft: '20px', gap: '10px' }}>
                    <Typography>(ก) ใช้เพื่อตรวจสอบบริการของเราหรือ ธุรกิจของเรา</Typography>

                    <Typography>
                      (ข) ใช้เพื่อป้องกันและตรวจสอบการฉ้อโกง กิจกรรมที่ผิดกฎหมาย
                      การละเว้นหรือการประพฤติผิด
                      ไม่ว่าจะเกี่ยวข้องกับการใช้บริการของเราหรือกิจกรรมอื่นใดอันเกิดจากความสัมพันธ์ของคุณกับเรา
                      และไม่ว่าจะมีความสงสัยในสิ่งที่ได้กล่าวถึงข้างต้นหรือไม่ก็ตาม
                    </Typography>
                    <Typography>
                      (ฃ) ใช้เพื่อให้สามารถตรวจสอบและทำการสำรวจและอื่น ๆ
                      เพื่อตรวจสอบขนาดและองค์ประกอบของกลุ่มเป้าหมายของเรา
                      และทำความเข้าใจเกี่ยวกับประสบการณ์ที่ผู้ใช้งานได้รับจากบริการ
                    </Typography>
                    <Typography>
                      (ค) ใช้เพื่อ ดำเนินการศึกษา วิเคราะห์ และพัฒนากิจกรรมต่างๆ เพื่อ
                      วิเคราะห์การใช้บริการ เพื่อนำไปปรับปรุงบริการหรือผลิตภัณฑ์ของเรา
                      และ/หรือช่วยเสริมประสบการณ์ของผู้ใช้งาน
                    </Typography>
                    <Typography>
                      (ฅ)
                      ใช้เพื่อแจ้งให้ผู้ใช้งานทราบเมื่อผู้ใช้คนอื่นส่งข้อความส่วนตัวหรือโพสต์ความคิดเห็นบนเว็บไซต์
                      หรือ แอพพลิเคชั่น
                    </Typography>
                    <Typography>
                      (ฆ) ใช้เมื่อผู้ใช้งานใช้แอปพลิเคชั่น
                      เว็บไซต์หรือบริการอื่นของบุคคลภายนอกที่ใช้หรือรวมกับบริการของเรา
                      บุคคลภายนอกนั้นอาจรับข้อมูลเกี่ยวกับสิ่งที่คุณโพสต์หรือแบ่งปัน
                      รวมทั้งข้อมูลส่วนตัวบางอย่างที่ทางเราจัดเก็บ
                    </Typography>
                    <Typography>
                      (ง) ใช้เพื่อตอบรับ ดำเนินการ จัดการ หรือทำธุรกรรมให้เสร็จสมบูรณ์
                      และ/หรือทำตามการร้องขอเกี่ยวกับผลิตภัณฑ์และบริการของผู้ใช้งาน
                      และแจ้งให้ผู้ใช้งานทราบเกี่ยวกับปัญหาด้านการบริการและการดำเนินการเกี่ยวกับบัญชี
                      ที่มีความผิดปกติ
                    </Typography>
                    <Typography>
                      (จ)
                      ใช้เพื่อบังคับใช้เงื่อนไขการให้บริการหรือข้อตกลงสิทธิ์การใช้งานสำหรับผู้ใช้ที่เกี่ยวข้อง
                    </Typography>
                    <Typography>(ฉ) ใช้เพื่อระบุตัวตนและ/หรือการตรวจสอบความถูกต้อง</Typography>
                    <Typography>
                      (ช) ใช้เมื่อผู้ใช้งานนำข้อมูลเข้าระบบ
                      เพื่อแสดงข้อมูลรายการไปยังผู้ใช้งานอื่นที่มีส่วนเกี่ยวข้อง กับผู้ใช้งาน เช่น
                      ผู้เช่า และเจ้าของอาคาร
                    </Typography>
                  </Stack>
                </InfoCard>
                <InfoCard title="SmartRMS และข้อสงวนสิทธิในการปฏิเสธความรับผิด">
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    SmartRMS อาจแก้ไขข้อตกลงและเงื่อนไขการให้บริการเป็นครั้งคราว
                    โดยไม่ได้แจ้งให้ผู้ใช้งานทราบล่วงหน้า
                    ด้วยเหตุผลหลากหลายประการซึ่งรวมถึงเพื่อปรับปรุงแนวทางปฏิบัติการคุ้มครองความเป็นส่วนตัว
                    เพื่อให้สอดคล้องกับการเปลี่ยนแปลงบริการ และปฏิบัติตามกฎหมายที่เกี่ยวข้อง
                    SmartRMS ได้ทำการปรับปรุงข้อตกลงและเงื่อนไขการให้บริการนี้เมื่อวันที่ 10 ตุลาคม
                    2562 เมื่อ SmartRMS
                    ทำการแก้ไขเปลี่ยนแปลงข้อตกลงและเงื่อนไขการให้บริการดังกล่าวแล้ว
                    ผู้ใช้งานควรตรวจสอบด้วยความรอบคอบ หากผู้ใช้งานตกลงตามการแก้ไขเปลี่ยนแปลงดังกล่าว
                    โปรดใช้บริการของ SmartRMS ต่อไป
                    แต่หากผู้ใช้งานไม่ตกลงตามการแก้ไขเปลี่ยนแปลงดังกล่าว และไม่ประสงค์จะใช้บริการของ
                    SmartRMS แล้ว ผู้ใช้งานอาจเลือกปิดบัญชีของผู้ใช้งานได้โดยแจ้งกับทาง SmartRMS
                    ผ่านช่องทางที่ท่านสามารถติดต่อได้
                  </Typography>
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    ซึ่งการที่ผู้ใช้งานใช้บริการของ SmartRMS
                    ต่อไปหลังจากที่ได้มีการแจ้งให้ผู้ใช้งานทราบ
                    เรื่องการแก้ไขเปลี่ยนแปลงแล้วหรือได้มีการประกาศในบริการแล้ว
                    ถือว่าผู้ใช้งานยอมรับการแก้ไขเปลี่ยนแปลงและยินยอมตามข้อตกลงและเงื่อนไขการให้บริการที่แก้ไขเปลี่ยนแปลงนี้แล้ว
                    SmartRMS จะขอความยินยอมจากผู้ใช้งาน หากกฎหมายที่ใช้บังคับกำหนดไว้
                  </Typography>
                  <Typography
                    sx={{
                      textIndent: '20px',
                      lineHeight: 1.5,
                      overflowWrap: 'break-word',
                    }}
                  >
                    หากผู้ใช้งานต้องการความช่วยเหลือเกี่ยวกับบริการของ SmartRMS
                    สามารถติดต่อเราเบอร์โทรศัพท์ 02-026-1911, 0618560707 หรือ อีเมล
                    support@smartrms.net เราจะพยายามสุดความสามารถเพื่อช่วยเหลือ
                    และมอบความสุขตลอดการใช้งาน SmartRMS
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

export default TermOfServicePage;
