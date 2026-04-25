import { Tooltip } from '@/components/ui/tooltip';
import { Image } from '@chakra-ui/react';

type HelperImageProps = {
  label?: string;
  src: string;
};

const LOGO_SIZE = 5; // Chakra spacing token — 20px

export const LogoWithTooltip = ({ label = '', src }: HelperImageProps) => {
  return (
    <Tooltip showArrow aria-label={label} content={label}>
      <Image src={src} alt={label} title={label} height={LOGO_SIZE} width={LOGO_SIZE} />
    </Tooltip>
  );
};
