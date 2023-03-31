import NavBar from "./nav-bar";

export default function LandingLayout({
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
