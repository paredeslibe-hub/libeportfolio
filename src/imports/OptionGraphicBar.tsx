import svgPaths from "./svg-m4pmcfs6aw";

function IconBack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Back">
          <path d={svgPaths.p3edc65c0} fill="var(--fill-0, #6CC24A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <IconBack />
      <p className="css-4hzbpn font-['Cabin:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#17242b] text-[18px] tracking-[0.5px] w-[257px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Meu Bankuish Score
      </p>
    </div>
  );
}

function HeaderSecondary() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65px] items-start left-0 pl-[16px] pr-[12px] py-[20px] top-[28px] w-[360px]" data-name="Header - Secondary">
      <Frame />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute h-[12px] right-[3px] top-[2px] w-[22px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
        <g id="Battery">
          <path d={svgPaths.pd762400} fill="var(--fill-0, #13294B)" id="Border" opacity="0.35" />
          <path clipRule="evenodd" d={svgPaths.p20b2e330} fill="var(--fill-0, #FBFFFD)" fillRule="evenodd" id="Border (Stroke)" opacity="0.35" />
          <path d={svgPaths.p8076900} fill="var(--fill-0, #13294B)" id="Cap" opacity="0.4" />
          <path d={svgPaths.p3c884e80} fill="var(--fill-0, #13294B)" id="Capacity" />
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="absolute inset-[6.25%_39.71%_0_29.41%]" data-name="Wifi">
      <div className="absolute h-[10.999px] right-[2.96px] top-[1.33px] w-[15.108px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1078 10.9993">
          <path clipRule="evenodd" d={svgPaths.p2b484900} fill="var(--fill-0, #13294B)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="absolute h-[12px] right-[50px] top-[2px] w-[17px]" data-name="Cell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
        <g id="Cell">
          <path clipRule="evenodd" d={svgPaths.p250fb280} fill="var(--fill-0, #13294B)" fillRule="evenodd" id="Cell_2" />
        </g>
      </svg>
    </div>
  );
}

function Ui() {
  return (
    <div className="absolute h-[16px] right-[13px] top-[5px] w-[67px]" data-name="UI">
      <Battery />
      <Wifi />
      <Cell />
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[23px] left-[21px] top-[-2px] w-[56px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 23">
        <g id="Time">
          <g id="Time_2">
            <path d={svgPaths.p981b080} fill="var(--fill-0, #13294B)" />
            <path d={svgPaths.p2969ce00} fill="var(--fill-0, #13294B)" />
            <path d={svgPaths.p31570380} fill="var(--fill-0, #13294B)" />
            <path d={svgPaths.p37337bc0} fill="var(--fill-0, #13294B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-[#addfb3] inset-0" data-name="Status Bar">
      <Ui />
      <Time />
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[360px]" data-name="Status Bar">
      <StatusBar />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[48px] top-[361px]">
      <p className="absolute css-4hzbpn font-['Cabin:Regular',sans-serif] font-normal h-[76px] leading-[normal] left-[48px] text-[#17242b] text-[13px] top-[361px] tracking-[0.5px] w-[292px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Para que você possa melhorar o seu Bankuish Score, vamos te enviar Dicas todas as semanas para que você possa melhorar sua saúde financeira
      </p>
    </div>
  );
}

function Asisstant() {
  return (
    <div className="absolute left-[15px] size-[25px] top-[361px]" data-name="asisstant">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="asisstant">
          <path d={svgPaths.p36527d80} fill="var(--fill-0, #13294B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[15px] top-[361px]">
      <Group2 />
      <Asisstant />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[48px] top-[265px]">
      <div className="absolute font-['Cabin:Regular',sans-serif] font-normal h-[76px] leading-[normal] left-[48px] text-[#17242b] text-[0px] text-[13px] top-[265px] tracking-[0.5px] w-[292px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn font-['Cabin:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Você é um exemplo para os demais!
        </p>
        <p className="css-4hzbpn mb-0">Seu Bankuish Score está excelente assim como suas chances de receber grandes oportunidades mas, não se esqueça de atualizar as conexões todas as semanas!</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
    </div>
  );
}

function Asisstant1() {
  return (
    <div className="absolute left-[15px] size-[25px] top-[265px]" data-name="asisstant">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="asisstant">
          <path d={svgPaths.p36527d80} fill="var(--fill-0, #13294B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[15px] top-[265px]">
      <Group3 />
      <Asisstant1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[48px] top-[457px]">
      <p className="absolute css-4hzbpn font-['Cabin:Regular',sans-serif] font-normal h-[113px] leading-[normal] left-[48px] text-[#17242b] text-[13px] top-[457px] tracking-[0.5px] w-[292px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Seu Bankuish Score
        <br aria-hidden="true" />
        {`Indica o nível de risco que você representa para os credores traduzida em uma pontuação numérica que varia entre 300 e 850. `}
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        Quanto mais próxima dos 850, menores riscos você representa!
      </p>
    </div>
  );
}

function Asisstant2() {
  return (
    <div className="absolute left-[15px] size-[25px] top-[457px]" data-name="asisstant">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="asisstant">
          <path d={svgPaths.p36527d80} fill="var(--fill-0, #13294B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[15px] top-[457px]">
      <Group4 />
      <Asisstant2 />
    </div>
  );
}

function OptionGraphicBar() {
  return (
    <div className="absolute h-[1041px] left-0 overflow-x-clip overflow-y-auto rounded-[20px] top-0 w-[360px]" data-name="option- graphicBar">
      <div className="absolute h-[803px] left-0 top-0 w-[361px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 803">
            <path d="M0 0H361V803H0V0Z" fill="var(--fill-0, white)" id="Rectangle 380" />
          </svg>
        </div>
      </div>
      <HeaderSecondary />
      <StatusBar1 />
      <Group6 />
      <Group8 />
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-white inset-0" />
      <div className="absolute bg-[#515151] inset-[40.91%_32.78%_36.36%_33.06%] rounded-[4px]" />
    </div>
  );
}

function ButtomBar() {
  return (
    <div className="absolute h-[22px] left-1/2 top-[777px] translate-x-[-50%] w-[360px]" data-name="buttom bar">
      <Group9 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[62px] text-center top-[139.05px]">
      <p className="absolute css-ew64yg left-[178.5px] text-[#17242b] text-[45px] top-[139.05px] tracking-[-0.3333px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        850
      </p>
      <p className="absolute css-ew64yg left-[75.5px] text-[#515151] text-[13px] top-[206.1px] tracking-[0.5px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        300
      </p>
      <p className="absolute css-ew64yg left-[271.5px] text-[#515151] text-[13px] top-[206.05px] tracking-[0.5px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        850
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[62px] top-[85px]">
      <Group />
      <div className="absolute h-[29.826px] left-[77px] top-[171.27px] w-[7px]">
        <div className="absolute inset-[-11.74%_-50.01%_-11.73%_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0009 36.827">
            <path d={svgPaths.p306d4900} id="Vector 209" stroke="var(--stroke-0, #FFAC2C)" strokeLinecap="round" strokeWidth="7" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[42.334px] items-center justify-center left-[88px] top-[124.6px] w-[25px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[22.862deg]">
          <div className="h-[41.964px] relative w-[9.438px]">
            <div className="absolute inset-[-8.34%_-37.09%_-8.34%_-37.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4391 48.9644">
                <path d={svgPaths.p18816380} id="Vector 213" stroke="var(--stroke-0, #FCE93E)" strokeLinecap="round" strokeWidth="7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[57.539px] items-center justify-center left-[120.5px] top-[85px] w-[68px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[55.145deg]">
          <div className="h-[66.088px] relative w-[24.092px]">
            <div className="absolute inset-[-5.3%_-14.53%]" style={{ "--stroke-0": "rgba(166, 255, 132, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0917 73.0878">
                <path d={svgPaths.p2b605980} id="Vector 214" stroke="var(--stroke-0, #A6FF84)" strokeLinecap="round" strokeWidth="7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[44.673px] items-center justify-center left-[190px] top-[106.27px] w-[74.536px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[105.907deg]">
          <div className="h-[69.946px] relative w-[26.518px]">
            <div className="absolute inset-[-5%_-13.2%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.5185 76.9464">
                <path d={svgPaths.p1a48f000} id="Vector 211" stroke="var(--stroke-0, #0EBF76)" strokeLinecap="round" strokeWidth="7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[265px] size-[15px] top-[192.1px]">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(69, 88, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <circle cx="7.5" cy="7.5" id="Ellipse 97" r="5.5" stroke="var(--stroke-0, #4558FF)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[33.541px] items-center justify-center left-[263px] top-[158.1px] w-[9px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[33.541px] relative w-[9px]">
            <div className="absolute inset-[-10.44%_-38.9%_-10.44%_-38.89%]" style={{ "--stroke-0": "rgba(69, 88, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0009 40.5422">
                <path d={svgPaths.p2050ef00} id="Vector 212" stroke="var(--stroke-0, #4558FF)" strokeLinecap="round" strokeWidth="7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[62px] top-[85px]">
      <p className="absolute css-4hzbpn font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[175.5px] text-[#515151] text-[13px] text-center top-[198px] tracking-[0.5px] translate-x-[-50%] w-[151px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Excelente, você é trabalhador 5 estrelas!
      </p>
      <Group1 />
    </div>
  );
}

export default function OptionGraphicBar1() {
  return (
    <div className="overflow-clip relative rounded-[20px] size-full" data-name="option- graphicBar">
      <OptionGraphicBar />
      <ButtomBar />
      <Group5 />
    </div>
  );
}