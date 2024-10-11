import { Card, CardHeader, CardContent, Stack } from '@mui/material';
import { neutral } from '@renderer/theme/color';
import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => (
  <Card
    variant="outlined"
    sx={{ mt: 1 }}
  >
    <CardHeader
      title={title}
      sx={{
        backgroundColor: 'primary.main',
        color: neutral[50],
        padding: 2,
      }}
    />
    <CardContent sx={{ padding: 2 }}>
      <Stack sx={{ gap: '10px' }}>{children}</Stack>
    </CardContent>
  </Card>
);

export default InfoCard;
