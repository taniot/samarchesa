import { createContext } from 'react';

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

const MenuContext = createContext<Props>({
  isOpen: false,
  toggleOpen: () => {},
});

export default MenuContext;
