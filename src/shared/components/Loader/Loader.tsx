import { CircularProgress } from '@mui/material';

import type { CircularProgressProps } from '@mui/material';

const Loader = ({ size }: { size?: CircularProgressProps['size'] }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <CircularProgress size={size} />
    </div>
  );
};

export default Loader;
