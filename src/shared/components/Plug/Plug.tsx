import { Box } from '@mui/material';

interface IPlugProps {
  text: string;
  fontSize: 'text-sm' | 'text-base' | 'text-4xl';
}

const Plug = (props: IPlugProps) => {
  const { text, fontSize } = props;
  return (
    <Box className="flex h-full w-full items-center justify-center text-center">
      <p className={`text-slate-800 ${fontSize}`}>{text}</p>
    </Box>
  );
};

export default Plug;
