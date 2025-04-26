
import AboutBanner from "@/components/banner/AboutBanner";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import Wedo from "@/components/whatwe-do/Wedo";
import FeatureOne from "@/components/feature/FeatureOne";
import FeatureTwo from "@/components/feature/FeatureTwo";
import ServiceSix from "@/components/services/ServiceSix";
import PricingFour from "@/components/pricing/PricingFour";
import TestimonialsThree from "@/components/testimonials/TestimonialsThree";
import BrandTwo from "@/components/brand/BrandTwo";
import CtaFour from "@/components/cta/CtaFour";
import Abouthead from "@/components/about/Abouthead";
import Founder from "@/components/about/Founder";
import Testimonials from "@/components/testimonials/Testimonials";
import Clint from "@/components/about/Clint";
import CtaOne from "@/components/cta/CtaOne";

export default function Home() {
    return (
        <div className='#'>
            <HeaderOne />
        <AboutBanner />
            <CtaOne />
            {/* <Founder /> */}
            <Clint />
<Testimonials />

            <CtaFour />
            <FooterOne />
            <BackToTop />
        </div>
    );
}
