// Interface for sidebar
export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// Interface for the topbar
export interface TopbarProps {
  onMenuClick: () => void;
}
