export interface MenuItemProps {
  visible: boolean;
  children: string;
  changeVisible: () => void;
  removeItem: () => void;
}
