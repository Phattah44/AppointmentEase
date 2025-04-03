import React, { useContext } from 'react';
import {
  MoonIcon,
  SunIcon,
  PenIcon,
  Settings2,
  LogOut,
  Folder,
  SettingsIcon,
  SearchIcon,
  SaveIcon,
  SendIcon,
  UserIcon,
  MessageCircle,
} from 'lucide-react';
import {
  Avatar,
  Button,
  ChattterLogo,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  LinkButton,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tooltip,
} from '../ui';
import Link from 'next/link';
import { useBooleanStateControl } from '@/hooks';
import { getInitials } from '@/utils/strings';
import { User } from 'firebase/auth';
import { useSearchParams, usePathname } from 'next/navigation';

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const AppHeader: React.FC<Props> = ({ theme, toggleTheme }) => {
  const params = useSearchParams();
  const pathName = usePathname();
  const postToEditId = params.get('edit');

  const {
    state: isSearchModalOpen,
    setTrue: openSearchModal,
    setFalse: closeSearchModal,
  } = useBooleanStateControl();

  return (
    <header className='sticky top-0 flex items-center justify-between w-full px-5 py-3 md:px-10 md:py-4 border-b-[0.6px] border-muted-foreground dark:border-b-muted font-display'>
      <ChattterLogo />
      <section className='flex items-center gap-4 md:gap-4'>
        <Tooltip content='Search'>
          <SearchIcon
            onClick={openSearchModal}
            size={24}
            className='cursor-pointer'
          />
        </Tooltip>

        <Tooltip content={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}>
          <div onClick={toggleTheme} className='cursor-pointer'>
            {theme == 'dark' ? (
              <SunIcon size={26} strokeWidth={1.8} />
            ) : (
              <MoonIcon size={24} strokeWidth={1.8} />
            )}
          </div>
        </Tooltip>

      
      </section>

      
    </header>
  );
};

export default AppHeader;
