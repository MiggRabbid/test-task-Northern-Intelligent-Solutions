import { Box } from '@mui/material';
import { ReposTable } from '../../entities/ReposTable';
import { ReposItem } from '../../entities/ReposItem';

const HomePageLayout = () => {
  return (
    <Box
      className="flex h-full w-full"
      sx={{
        height: 'calc(100vh - 72px)',
      }}
    >
      <ReposTable />
      <ReposItem />
    </Box>
  );
};

export default HomePageLayout;
