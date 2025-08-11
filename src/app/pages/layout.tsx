import Navbar from "@/components/app-navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
