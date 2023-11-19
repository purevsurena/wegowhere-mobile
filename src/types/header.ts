export type HeaderProps = {
  title: string;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
};

export const HeaderDefaultProps = {
  isLeftIcon: true,
  isRightIcon: true,
};
