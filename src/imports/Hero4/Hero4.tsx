import svgPaths from "./svg-qs20gkemae";
import imgHero4 from "./8601e7a0b876b42a34fb6cb86fc5483d5b6f5ce1.png";

function Company() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Company">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[1.2]">Contáctame</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="content-stretch flex items-start relative shrink-0" data-name="Nav">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.71)] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[1.2]">paredeslibe@gmail.com</p>
      </div>
    </nav>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="Text">
      <Company />
      <Nav />
    </div>
  );
}

function Company1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Company">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[1.2]">Whatsapp</p>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <nav className="content-stretch flex items-start relative shrink-0" data-name="Nav">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.71)] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[1.2]">+54 1132914989</p>
      </div>
    </nav>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0" data-name="Text">
      <Company1 />
      <Nav1 />
    </div>
  );
}

function SocialLink() {
  return (
    <div className="relative shrink-0 size-[43px]" data-name="Social link 2" role="button" tabIndex={0}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
        <g clipPath="url(#clip0_100_593)" id="Social link 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2d85e00} fill="black" fillOpacity="0.8" fillRule="evenodd" />
            <path d={svgPaths.p21c90080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p173c3b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b9f3000} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_100_593">
            <rect fill="white" height="43" width="43" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialLinks() {
  return (
    <nav className="block content-stretch cursor-pointer flex items-center size-full" data-name="Social links">
      <SocialLink />
    </nav>
  );
}

export default function Hero() {
  return (
    <section className="content-stretch flex flex-col gap-[48px] items-center px-[64px] py-[120px] relative size-full" data-name="Hero 4">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero4} />
      <Text />
      <Text1 />
      <a className="relative shrink-0 size-[43px]" href="https://www.linkedin.com/in/libeparedes/" target="_self">
        <SocialLinks />
      </a>
    </section>
  );
}