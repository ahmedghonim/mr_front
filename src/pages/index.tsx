import { Button } from "@ui/atom";
import AboutUS from "@views/layout/public-page/home/about-us";
import Clients from "@views/layout/public-page/home/clients";
import HomeIntro from "@views/layout/public-page/home/intro-section";
import Statistics from "@views/layout/public-page/home/statistics";
import WhyUs from "@views/layout/public-page/home/why-us";
import Services from "@views/layout/public-page/services";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

const services = [
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
  {
    image: "",
    service_name: "Service Name",
  },
];

export default function IndexPage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("pages-title:home")}</title>
      </Head>
      <main>
        <section className="w-full md:pt-14">
          <HomeIntro />
          <Statistics />
          <AboutUS />
          <WhyUs />
          <Services
            className="bg-[#F2E4BF] md:pt-[70px] pt-10 md:pb-[108px] pb-10 px-6 rounded-[12px]"
            data={services}
          >
            <div className="flex justify-end">
              <Button className="!bg-dark-100 !rounded font-Lato font-bold mt-6">
                {t("view_all")}
              </Button>
            </div>
          </Services>
          <Clients />
        </section>
      </main>
    </>
  );
}
