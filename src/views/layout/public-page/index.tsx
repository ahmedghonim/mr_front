import NavBar from "./nav-bar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
