import { useMediaQuery } from "@mui/material";

export const useResponsiveLayout = () => {
  const isExtraSmall = useMediaQuery("(max-width:575px)");
  const isSmall = useMediaQuery("(min-width:576px) and (max-width:767px)");
  const isMedium = useMediaQuery("(min-width:768px) and (max-width:991px)");
  const isLarge = useMediaQuery("(min-width:992px) and (max-width:1199px)");
  const isExtraLarge = useMediaQuery("(min-width:1200px)");

  const getFontSize = (baseSize: number) => {
    if (isExtraSmall) return baseSize * 0.8;
    if (isSmall) return baseSize * 1.0;
    if (isMedium) return baseSize * .4;
    if (isLarge) return baseSize * .5;
    if (isExtraLarge) return baseSize * .6;
    return baseSize;
  };

  return {
    getFontSize,
    isExtraSmall,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
  };
};
