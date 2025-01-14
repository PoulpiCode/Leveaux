"use client";
import Navbar from "@/components/ui/nav-bar";
import { usePathname } from "next/navigation";
import SiteFooter from "./ui/site-footer";

export default function LayoutProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    return (
        <>
            {!/^\/dashboard.*$/.test(pathname) ? (
                <div className="sticky top-0 bg-white w-full z-50">
                    <Navbar />
                </div>
            ) : (
                <></>
            )}
            {children}
            {!/^\/dashboard.*$/.test(pathname) ? <SiteFooter /> : <></>}
        </>
    );
}