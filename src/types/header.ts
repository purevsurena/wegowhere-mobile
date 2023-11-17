export type HeaderProps = {
  title: string;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  onPressRight?: () => void;
};

export const HeaderDefaultProps = {
  isLeftIcon: true,
  isRightIcon: true,
};
