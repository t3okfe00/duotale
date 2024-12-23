import NavLinks from "../components/NavLinks";
import SidebarHeader from "../components/SidebarHeader";
import SignOutButton from "../components/SignOutButton";
import {
  Book,
  Flame,
  Home,
  Settings,
  Trophy,
  Gem,
  GraduationCap,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="px-4 w-80 min-h-full py-12 grid grid-rows-[auto-1fr-1auto] gap-12 sm:bg-slate-900">
      <SidebarHeader></SidebarHeader>
      <NavLinks></NavLinks>
      <SignOutButton></SignOutButton>
    </div>
  );
};

export default Sidebar;
