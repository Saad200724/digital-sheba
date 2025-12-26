import { Home, Grid, Search, User, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const items = [
  { icon: Grid, label: "Categories", path: "/categories" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "My Profile", path: "/profile" },
  { icon: MessageCircle, label: "Chat", path: "/chat" },
];

export const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden h-16 safe-area-inset-bottom">
      <div className="grid grid-cols-5 h-full">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-colors relative",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label === "Home" ? (
                <div className="absolute -top-4 bg-background p-2 rounded-full border shadow-lg border-primary/20">
                  <div className={cn(
                    "p-2 rounded-full",
                    isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
              ) : (
                <>
                  <item.icon className="w-5 h-5" />
                  <span className="text-[10px] font-medium leading-none">{item.label}</span>
                </>
              )}
              {item.label === "Home" && (
                <span className="text-[10px] font-medium leading-none mt-auto pb-1">{item.label}</span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
