import { useState } from 'react';
import { LogOut, KeyRound, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ChangePasswordDialog } from './ChangePasswordDialog';
import adminAvatar from '@/assets/admin-avatar.png';

interface Props {
  email: string;
  onLogout: () => void;
}

export const AdminHeader = ({ email, onLogout }: Props) => {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);

  const handlePasswordChanged = async () => {
    // Auto logout after password change
    onLogout();
  };

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Newsletter Upload</h1>
          <p className="text-muted-foreground text-sm mt-1">Publish a new newsletter edition</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Avatar className="h-7 w-7">
                <AvatarImage src={adminAvatar} alt="Admin" />
                <AvatarFallback className="text-xs">BEF</AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline max-w-[140px] truncate text-xs">
                {email}
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => setChangePasswordOpen(true)}>
              <KeyRound className="w-4 h-4 mr-2" />
              Change Password
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout} className="text-destructive focus:text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ChangePasswordDialog
        open={changePasswordOpen}
        onOpenChange={setChangePasswordOpen}
        onPasswordChanged={handlePasswordChanged}
      />
    </>
  );
};
