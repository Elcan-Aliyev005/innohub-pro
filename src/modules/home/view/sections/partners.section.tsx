import PartnersSwiper from '@/components/ui/carosuel/PartnersCarousel';
import { partners } from '@/const';
// import LogoLoop from '../../components/LogoLoop';




export function PartnersSection() {
  return (
    <section className='my-[50px] container mx-auto '>
      <div className="mb-[50px] text-center">
        <h2 className="text-balance font-bold leading-[112%] tracking-tight text-neutral-900 dark:text-neutral-50 text-2xl sm:text-4xl md:text-[44px] xl:text-[48px]">
          Partnyorlarımız
        </h2>
        <p className=" max-w-2xl mx-auto text-base   sm:text-lg text-neutral-500 dark:text-neutral-400">
          Güclü ekosistem – etibarlı tərəfdaşlarla.
        </p>
      </div>

      <div>
        <PartnersSwiper partners={partners}/>
      </div>

      {/* <div style={{  position: 'relative', overflow: 'hidden' }}>

        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={120}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div> */}
    </section>
  );
}