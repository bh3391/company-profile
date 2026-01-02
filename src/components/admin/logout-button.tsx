"use client";

import { logoutAction } from "@/actions/auth"; // GANTI IMPORT INI
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction(); // Gunakan logoutAction
    router.push("/login");
    router.refresh();
  };

  return (
    <Button variant="ghost" onClick={handleLogout} className="text-red-600">
      <LogOut className="w-4 h-4 mr-2" />
      Logout
    </Button>
  );
}