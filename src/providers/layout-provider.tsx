import PublicLayout from "@views/layout/public-page/layout";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={true}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

function LayoutProvider({ children }: Props): JSX.Element {
  const { asPath } = useRouter();

  return applyLayoutFor(asPath) ? (
    <>
      {children}
      <Toast />
    </>
  ) : (
    <PublicLayout>
      {children}
      <Toast />
    </PublicLayout>
  );
}

export default LayoutProvider;

export const applyLayoutFor = (url: string) => {
  return [/^(\/(ar|en))?\/(admin)(\/?).*?/].some((fullPageRegex) =>
    fullPageRegex.test(url)
  );
};
