import { usePathname } from "next/navigation";

function useNavigate() {
  const pathName = usePathname();

  return (link: string) => {
    const segments = pathName.split("/");

    return "/" + segments[1] + link;
  };
}

export default useNavigate;
