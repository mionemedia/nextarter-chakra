import { Tooltip } from '@/components/ui/tooltip';
import { Image } from '@chakra-ui/react';

type LogoWithTooltipProps = {
  label?: string;
  src: string;
};

const size = 5;

export const LogoWithTooltip = ({ label = '', src }: LogoWithTooltipProps) => {
  return (
    <Tooltip showArrow aria-label={label} content={label}>
      <Image src={src} alt={label} title={label} height={size} width={size} />
    </Tooltip>
  );
};
