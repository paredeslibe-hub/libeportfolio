import svgPaths from "./svg-hapjamamf8";

function Battery() {
  return (
    <div className="absolute h-[12px] right-[3px] top-[2px] w-[22px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
        <g id="Battery">
          <path d={svgPaths.pd762400} fill="var(--fill-0, #515151)" id="Border" opacity="0.35" />
          <path clipRule="evenodd" d={svgPaths.p20b2e330} fill="var(--fill-0, #FBFFFD)" fillRule="evenodd" id="Border (Stroke)" opacity="0.35" />
          <path d={svgPaths.p8076900} fill="var(--fill-0, #515151)" id="Cap" opacity="0.4" />
          <path d={svgPaths.p3c884e80} fill="var(--fill-0, #515151)" id="Capacity" />
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="absolute inset-[6.25%_39.71%_0_29.41%]" data-name="Wifi">
      <div className="absolute h-[10.999px] right-[2.96px] top-[1.33px] w-[15.108px]" data-name="Wifi">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(81, 81, 81, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1078 10.9993">
            <path clipRule="evenodd" d={svgPaths.p2b484900} fill="var(--fill-0, #515151)" fillRule="evenodd" id="Wifi" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="absolute h-[12px] right-[50px] top-[2px] w-[17px]" data-name="Cell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
        <g id="Cell">
          <path clipRule="evenodd" d={svgPaths.p250fb280} fill="var(--fill-0, #515151)" fillRule="evenodd" id="Cell_2" />
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
            <path d={svgPaths.p981b080} fill="var(--fill-0, #515151)" />
            <path d={svgPaths.p2969ce00} fill="var(--fill-0, #515151)" />
            <path d={svgPaths.p31570380} fill="var(--fill-0, #515151)" />
            <path d={svgPaths.p37337bc0} fill="var(--fill-0, #515151)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-white inset-0" data-name="Status Bar">
      <Ui />
      <Time />
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute h-[24px] left-1/2 top-0 translate-x-[-50%] w-[360px]" data-name="Status Bar">
      <StatusBar />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute left-[115px] size-[18px] top-[107px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group 1203">
          <g id="Ellipse 102">
            <circle cx="9" cy="9" fill="var(--fill-0, #6CC24A)" r="9" />
            <circle cx="9" cy="9" fill="var(--fill-1, black)" fillOpacity="0.2" r="9" />
            <circle cx="9" cy="9" fill="var(--fill-2, black)" fillOpacity="0.2" r="9" />
            <circle cx="9" cy="9" fill="var(--fill-3, black)" fillOpacity="0.2" r="9" />
            <circle cx="9" cy="9" fill="var(--fill-4, black)" fillOpacity="0.2" r="9" />
          </g>
          <g id="Vector">
            <path d={svgPaths.p31fbeb00} fill="var(--fill-0, #6CC24A)" />
            <path d={svgPaths.p31fbeb00} fill="var(--fill-1, black)" fillOpacity="0.2" />
            <path d={svgPaths.p31fbeb00} fill="var(--fill-2, black)" fillOpacity="0.2" />
            <path d={svgPaths.p31fbeb00} fill="var(--fill-3, black)" fillOpacity="0.2" />
            <path d={svgPaths.p31fbeb00} fill="var(--fill-4, black)" fillOpacity="0.2" />
            <path d={svgPaths.p31fbeb00} stroke="var(--stroke-0, #13294B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[16px] top-[107px]">
      <p className="absolute css-ew64yg font-['Cabin:Bold',sans-serif] font-bold leading-[normal] left-[58.5px] text-[#17242b] text-[16px] text-center top-[107px] tracking-[0.5px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conectadas
      </p>
      <Group32 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents left-0 top-[781px]">
      <div className="absolute bg-white h-[22px] left-0 top-[781px] w-[360px]" />
      <div className="absolute bg-black h-[5px] left-[119px] top-[790px] w-[123px]" />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-0 top-[781px]">
      <Group41 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[35.84%_87.67%_21.99%_4.44%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3789 27.4122">
        <g id="Group 621">
          <path d={svgPaths.p38458d00} fill="var(--fill-0, #6CC24A)" id="Subtract" />
          <g id="Subtract_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-13.35%_-15.83%_-26.69%_-14.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.7245 20.9853">
          <g filter="url(#filter0_ddd_62_1632)" id="Group 622">
            <path d={svgPaths.p110d0d00} fill="var(--fill-0, #6CC24A)" id="Vector 200" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.9853" id="filter0_ddd_62_1632" width="24.7245" x="-8.9407e-08" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_62_1632" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
              <feBlend in2="effect1_dropShadow_62_1632" mode="normal" result="effect2_dropShadow_62_1632" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
              <feBlend in2="effect2_dropShadow_62_1632" mode="normal" result="effect3_dropShadow_62_1632" />
              <feBlend in="SourceGraphic" in2="effect3_dropShadow_62_1632" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[23.08%_86.95%_21.99%_4.44%]">
      <Group5 />
      <div className="absolute flex inset-[23.08%_86.95%_51.35%_7.44%] items-center justify-center">
        <div className="flex-none h-[14.985px] rotate-[5.127deg] w-[18.957px]">
          <Group6 />
        </div>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[23.08%_40.28%_21.99%_4.44%]">
      <Group7 />
      <p className="absolute css-4hzbpn font-['Cabin:SemiBold',sans-serif] font-semibold inset-[33.85%_40.28%_32.31%_17.5%] leading-[normal] text-[#17242b] text-[18px] tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conectar
      </p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[23.08%_40.28%_21.99%_4.44%]">
      <Group30 />
    </div>
  );
}

function Notificacion() {
  return (
    <div className="absolute inset-[26.15%_4.72%_27.69%_84.72%]" data-name="Notificacion 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 30">
        <g id="Notificacion 2">
          <g id="Group 674">
            <path d={svgPaths.p1894b880} fill="var(--fill-0, #6CC24A)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute h-[35px] left-0 top-[-5px] w-[57px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 35">
        <g id="Group 1518">
          <g id="761">
            <path d={svgPaths.p1c55df40} fill="var(--fill-0, #17242B)" id="Vector" />
            <path d={svgPaths.p1fd59380} fill="var(--fill-0, #17242B)" id="Vector_2" />
            <path d={svgPaths.p33617d80} fill="var(--fill-0, #17242B)" id="Vector_3" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p1d218b80} fill="var(--fill-0, #FFAC2C)" fillRule="evenodd" id="Vector 209 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p39c32500} fill="var(--fill-0, #FCE93E)" fillRule="evenodd" id="Vector 213 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p3e69bbc0} fill="var(--fill-0, #ADDFB3)" fillRule="evenodd" id="Vector 214 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p3542de00} fill="var(--fill-0, #ADDFB3)" fillRule="evenodd" id="Vector 211 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p3bf1f600} fill="var(--fill-0, #ADDFB3)" fillRule="evenodd" id="Ellipse 97 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p20b333c0} fill="var(--fill-0, #4558FF)" fillOpacity="0.2" fillRule="evenodd" id="Vector 212 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[30px] left-[235px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[57px]">
      <Group37 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-[235px] top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Notificacion />
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[65px] left-1/2 top-[24px] translate-x-[-50%] w-[360px]" data-name="Header">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 65">
          <path d="M0 0H360V65H0V0Z" fill="var(--fill-0, white)" id="background" />
        </svg>
      </div>
      <Group31 />
      <Group44 />
    </div>
  );
}

function MaterialSymbolsKeyboardArrowDownRounded() {
  return (
    <div className="relative size-[24px]" data-name="material-symbols:keyboard-arrow-down-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:keyboard-arrow-down-rounded">
          <path d={svgPaths.p173c3700} fill="var(--fill-0, #17242B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <p className="col-1 css-4hzbpn font-['Cabin:Bold',sans-serif] font-bold leading-[normal] ml-0 mt-[3px] relative row-1 text-[#17242b] text-[16px] tracking-[0.5px] w-[173.188px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Para levar em conta...
      </p>
      <div className="col-1 flex items-center justify-center ml-[300px] mt-0 relative row-1 size-[24px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <MaterialSymbolsKeyboardArrowDownRounded />
        </div>
      </div>
    </div>
  );
}

function Group42() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <p className="col-1 css-4hzbpn font-['Cabin:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative row-1 text-[#17242b] text-[14px] tracking-[0.5px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Por que é importante manter suas contas atualizadas?
      </p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-[#f0f6f4] content-stretch flex flex-col gap-[4px] items-start leading-[0] left-[calc(50%+0.5px)] px-[20px] py-[10px] top-[249px] translate-x-[-50%] w-[359px]" data-name="Component 42">
      <Group43 />
      <Group42 />
    </div>
  );
}

function Platforms() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Platforms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Group">
          <path d={svgPaths.p23c8eb00} fill="var(--fill-0, #FDDC06)" id="Vector" />
          <g id="Vector_2">
            <path d={svgPaths.p32900480} fill="var(--fill-0, #1F1F1D)" />
            <path d={svgPaths.p337dab00} fill="var(--fill-0, #1F1F1D)" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p37650a00} fill="var(--fill-0, #FDDC06)" />
            <path d={svgPaths.p11691d00} fill="var(--fill-0, #FDDC06)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SelectBankDefaul() {
  return (
    <div className="absolute bg-[#f0f6f4] bottom-[32.56%] content-stretch flex items-center justify-center left-1/2 px-[8px] py-[2px] rounded-[11px] top-0 translate-x-[-50%] w-[61px]" data-name="SelectBank-Defaul">
      <Platforms />
    </div>
  );
}

function Platforms1() {
  return (
    <div className="absolute h-[86px] left-[16px] top-[145px] w-[65px]" data-name="Platforms">
      <SelectBankDefaul />
      <p className="absolute bottom-[4.65%] css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-0.5px)] text-[#515151] text-[12px] text-center top-[77.91%] tracking-[-0.33px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        99
      </p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[21px] top-[19px]">
      <p className="absolute css-ew64yg font-['Cabin:Bold',sans-serif] font-bold leading-[normal] left-[83px] text-[#0039a6] text-[16px] text-center top-[19px] tracking-[0.5px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Apps disponíveis
      </p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[191px] top-[87px]">
      <div className="absolute bg-[#f0f6f4] h-[58px] left-[191px] rounded-[11px] top-[87px] w-[61px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[205px] size-[32px] top-[100px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.p11caa900} fill="var(--fill-0, #FC7F3D)" id="Vector" />
          <path d={svgPaths.p17d548f0} fill="var(--fill-0, #FCFDFC)" id="Vector_2" />
          <path d={svgPaths.p35beb700} fill="var(--fill-0, #FC7F3D)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Image160Layerstyle() {
  return (
    <div className="absolute contents left-[205px] top-[100px]" data-name="image 160_layerstyle">
      <Group />
    </div>
  );
}

function Image159Layerstyle() {
  return (
    <div className="absolute contents left-[205px] top-[100px]" data-name="image 159_layerstyle">
      <Image160Layerstyle />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[191px] top-[87px]">
      <Group8 />
      <div className="absolute css-g0mm18 font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[221.5px] text-[#515151] text-[11px] text-center top-[147px] tracking-[-0.3333px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg mb-0">DiDi</p>
        <p className="css-ew64yg">Conductor</p>
      </div>
      <Image159Layerstyle />
    </div>
  );
}

function DiDiRepartidor() {
  return (
    <div className="absolute contents left-[191px] top-[87px]" data-name="DiDi Repartidor">
      <Group24 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute left-[35px] size-[32px] top-[99px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.p2e8b0700} fill="var(--fill-0, #020202)" id="Vector" />
          <g id="Vector_2">
            <path d={svgPaths.p132bf480} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p3fc1f000} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p21489c00} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p2152f680} fill="var(--fill-0, #FCFCFC)" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p13f8cd00} fill="var(--fill-0, #020202)" />
            <path d={svgPaths.p5a32200} fill="var(--fill-0, #020202)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Image155Layerstyle() {
  return (
    <div className="absolute contents left-[35px] top-[99px]" data-name="image 155_layerstyle">
      <Group1 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[21px] top-[87px]">
      <div className="absolute bg-[#f0f6f4] h-[58px] left-[21px] rounded-[11px] top-[87px] w-[61px]" />
      <Image155Layerstyle />
    </div>
  );
}

function Uber() {
  return (
    <div className="absolute contents left-[21px] top-[87px]" data-name="Uber">
      <Group11 />
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[38px] text-[#515151] text-[11px] top-[147px] tracking-[-0.3333px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Uber
      </p>
    </div>
  );
}

function Group12() {
  return <div className="absolute contents left-0 top-0" />;
}

function Squircles() {
  return (
    <div className="absolute left-[120px] size-[32px] top-[100px]" data-name="Squircles">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Squircles">
          <circle cx="16" cy="16" fill="var(--fill-0, #5B39A8)" id="Ellipse 100" r="16" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[106px] top-[87px]">
      <div className="absolute bg-[#f0f6f4] h-[58px] left-[106px] rounded-[11px] top-[87px] w-[61px]" />
      <Squircles />
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[122px] text-[#515151] text-[11px] top-[147px] tracking-[-0.3333px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cabify
      </p>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[106px] top-[87px]">
      <Group12 />
      <Group28 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[106px] top-[87px]">
      <Group23 />
    </div>
  );
}

function Cabify1() {
  return (
    <div className="absolute h-[9px] left-[122px] top-[112px] w-[28px]" data-name="Cabify 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 9">
        <g clipPath="url(#clip0_62_2744)" id="Cabify 1">
          <path clipRule="evenodd" d={svgPaths.p2af87f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2c326b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p22f96b00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3a48100} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3d89d500} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pb7a6a00} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_62_2744">
            <rect fill="white" height="9" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Cabify() {
  return (
    <div className="absolute contents left-[106px] top-[87px]" data-name="Cabify">
      <Group22 />
      <Cabify1 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[276px] top-[87px]">
      <div className="absolute bg-[#f0f6f4] h-[58px] left-[276px] rounded-[11px] top-[87px] w-[61px]" />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[276px] top-[147px]">
      <p className="absolute css-4hzbpn font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[306.5px] text-[#515151] text-[11px] text-center top-[147px] tracking-[-0.3333px] translate-x-[-50%] w-[61px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cornershop
      </p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[276px] top-[87px]">
      <Group9 />
      <Group13 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[14.488px] left-[299px] top-[108px] w-[16.446px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4462 14.488">
        <g id="Group">
          <g id="Vector">
            <path d={svgPaths.p5e35b00} fill="var(--fill-0, #F80202)" />
            <path d={svgPaths.p12fda6c0} fill="var(--fill-0, #F80202)" />
            <path d={svgPaths.p4cf9700} fill="var(--fill-0, #F80202)" />
            <path d={svgPaths.p10ed5000} fill="var(--fill-0, #F80202)" />
            <path d={svgPaths.p1183ca00} fill="var(--fill-0, #F80202)" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.pe396000} fill="var(--fill-0, #FEFDFD)" />
            <path d={svgPaths.p1dfa3980} fill="var(--fill-0, #FEFDFD)" />
            <path d={svgPaths.p3d5ae600} fill="var(--fill-0, #FEFDFD)" />
            <path d={svgPaths.p323e5600} fill="var(--fill-0, #FEFDFD)" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p189f1880} fill="var(--fill-0, #F80202)" />
            <path d={svgPaths.p49950f0} fill="var(--fill-0, #F80202)" />
            <path d={svgPaths.p1cfa1d80} fill="var(--fill-0, #F80202)" />
            <path d={svgPaths.p194be5f0} fill="var(--fill-0, #F80202)" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p3d75e380} fill="var(--fill-0, #FC0100)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p25301280} fill="var(--fill-0, #FE0203)" fillRule="evenodd" id="Vector_5" />
          <g id="Vector_6">
            <path d={svgPaths.p82d21f0} fill="var(--fill-0, #F80202)" />
            <path d={svgPaths.p87fcf40} fill="var(--fill-0, #F80202)" />
          </g>
          <g id="Vector_7">
            <path d={svgPaths.p1816d00} fill="var(--fill-0, #FC0100)" />
            <path d={svgPaths.p2d7adc80} fill="var(--fill-0, #FC0100)" />
            <path d={svgPaths.p20f9b800} fill="var(--fill-0, #FC0100)" />
            <path d={svgPaths.p88bf180} fill="var(--fill-0, #FC0100)" />
          </g>
          <g id="Vector_8">
            <path d={svgPaths.p36953980} fill="var(--fill-0, #FE0203)" />
            <path d={svgPaths.p2069a940} fill="var(--fill-0, #FE0203)" />
            <path d={svgPaths.p36e2100} fill="var(--fill-0, #FE0203)" />
            <path d={svgPaths.p26384100} fill="var(--fill-0, #FE0203)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Image150Layerstyle() {
  return (
    <div className="absolute contents left-[299px] top-[108px]" data-name="image 150_layerstyle">
      <Group2 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[291px] top-[99px]">
      <div className="absolute left-[291px] size-[32px] top-[99px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #020202)" id="Ellipse 99" r="16" />
        </svg>
      </div>
      <Image150Layerstyle />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[276px] top-[87px]">
      <Group19 />
      <Group20 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[276px] top-[87px]">
      <Group21 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[20px] top-[197px]">
      <div className="absolute bg-[#f0f6f4] h-[58px] left-[20px] rounded-[11px] top-[197px] w-[61px]" />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[20px] top-[197px]">
      <Group14 />
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[35px] text-[#515151] text-[11px] top-[257px] tracking-[-0.3333px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        InDriver
      </p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[20px] top-[197px]">
      <Group10 />
    </div>
  );
}

function InDrive() {
  return (
    <div className="absolute contents left-[20px] top-[197px]" data-name="InDrive">
      <Group18 />
    </div>
  );
}

function InDriver() {
  return (
    <div className="absolute left-[35px] size-[32px] top-[210px]" data-name="inDriver">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="inDriver">
          <circle cx="16" cy="16" fill="var(--fill-0, #A7E92F)" id="Ellipse 102" r="16" />
          <g clipPath="url(#clip0_62_2760)" id="Layer_1">
            <path d={svgPaths.p1912e250} fill="var(--fill-0, #000100)" id="Vector" />
            <path d={svgPaths.pa936ac0} fill="var(--fill-0, #000100)" id="Vector_2" />
            <path d={svgPaths.p2b0e9a40} fill="var(--fill-0, #000100)" id="Vector_3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_62_2760">
            <rect fill="white" height="18" transform="translate(7 7)" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InDriver1() {
  return (
    <div className="absolute contents left-[20px] top-[197px]" data-name="InDriver">
      <InDrive />
      <InDriver />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute left-[121px] size-[32px] top-[209px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <path d={svgPaths.p2e8b0700} fill="var(--fill-0, #F04336)" id="Vector" />
          <g id="Vector_2">
            <path d={svgPaths.p332d7e40} fill="var(--fill-0, #F7FBFA)" />
            <path d={svgPaths.p1fd2b8b0} fill="var(--fill-0, #F7FBFA)" />
            <path d={svgPaths.p10787f00} fill="var(--fill-0, #F7FBFA)" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p2443d00} fill="var(--fill-0, #F04336)" />
            <path d={svgPaths.p2838f300} fill="var(--fill-0, #F04336)" />
            <path d={svgPaths.p279c7680} fill="var(--fill-0, #F04336)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Image157Layerstyle() {
  return (
    <div className="absolute contents left-[121px] top-[209px]" data-name="image 157_layerstyle">
      <Group3 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[105px] top-[197px]">
      <div className="absolute bg-[#f0f6f4] h-[58px] left-[105px] rounded-[11px] top-[197px] w-[61px]" />
      <Image157Layerstyle />
    </div>
  );
}

function Rappi() {
  return (
    <div className="absolute contents left-[105px] top-[197px]" data-name="Rappi">
      <Group15 />
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[123px] text-[#515151] text-[11px] top-[257px] tracking-[-0.3333px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rappi
      </p>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[190px] top-[197px]">
      <div className="absolute bg-[#f0f6f4] h-[58px] left-[190px] rounded-[11px] top-[197px] w-[61px]" />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[190px] top-[197px]">
      <Group16 />
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[199px] text-[#515151] text-[11px] top-[257px] tracking-[-0.3333px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Uber Eats
      </p>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[190px] top-[197px]">
      <Group25 />
    </div>
  );
}

function Squircles1() {
  return (
    <div className="absolute inset-[71.43%_34.26%_17.69%_56.82%]" data-name="Squircles">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Squircles">
          <circle cx="16" cy="16" fill="var(--fill-0, #020202)" id="Ellipse 100" r="16" />
          <path d={svgPaths.pd1c5e00} fill="var(--fill-0, #06C167)" id="Vector" />
          <path d={svgPaths.p9b96de0} fill="var(--fill-0, #F6F0EA)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[204px] top-[210px]">
      <Squircles1 />
    </div>
  );
}

function UberEats() {
  return (
    <div className="absolute contents left-[190px] top-[197px]" data-name="Uber eats">
      <Group26 />
      <Group27 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[276px] top-[197px]">
      <div className="absolute bg-[#f0f6f4] h-[58px] left-[276px] rounded-[11px] top-[197px] w-[61px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute left-[291px] size-[31px] top-[210px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g id="Group">
          <path d={svgPaths.p9d34580} fill="var(--fill-0, #EF3A50)" id="Vector" />
          <path d={svgPaths.p3af2b6f0} fill="var(--fill-0, #FAFCFC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Image153Layerstyle() {
  return (
    <div className="absolute contents left-[291px] top-[210px]" data-name="image 153_layerstyle">
      <Group4 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[276px] top-[197px]">
      <Group17 />
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[283px] text-[#515151] text-[11px] top-[260px] tracking-[-0.3333px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PedidosYa
      </p>
      <Image153Layerstyle />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[20px] top-[87px]">
      <DiDiRepartidor />
      <Uber />
      <Cabify />
      <Group29 />
      <InDriver1 />
      <Rappi />
      <UberEats />
      <Group33 />
    </div>
  );
}

function MaterialSymbolsKeyboardArrowDownRounded1() {
  return (
    <div className="relative size-[24px]" data-name="material-symbols:keyboard-arrow-down-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:keyboard-arrow-down-rounded">
          <path d={svgPaths.p173c3700} fill="var(--fill-0, #0039A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PlatformsDropdown() {
  return (
    <div className="absolute bg-white h-[294px] left-[calc(50%+0.5px)] top-[377px] translate-x-[-50%] w-[359px]" data-name="platformsDropdown">
      <div className="absolute h-0 left-[10px] top-[-8px] w-[359px]">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(240, 246, 244, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 359 1">
            <line id="Line 29" stroke="var(--stroke-0, #F0F6F4)" strokeLinecap="round" x1="0.5" x2="358.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group35 />
      <p className="absolute css-4hzbpn font-['Cabin:Regular',sans-serif] font-normal h-[22px] leading-[normal] left-[20px] text-[#515151] text-[14px] top-[43px] tracking-[0.5px] w-[284px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ¡Conecta más cuentas y suma puntaje!
      </p>
      <Group36 />
      <div className="absolute flex items-center justify-center left-[308px] size-[24px] top-[14px]">
        <div className="flex-none scale-y-[-100%]">
          <MaterialSymbolsKeyboardArrowDownRounded1 />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute contents left-[18px] top-[13px]" data-name="Home">
      <div className="absolute inset-[21.54%_87.78%_47.69%_7.22%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(81, 81, 81, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9993 20">
            <path d={svgPaths.p2f999200} fill="var(--fill-0, #515151)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Cabin:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-145px)] text-[#515151] text-[14px] text-center top-[49.5px] tracking-[0.5px] translate-x-[-50%] translate-y-[-50%] w-[34px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[normal]">Início</p>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute inset-[20%_23.64%_49.38%_70.83%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9026 19.9026">
        <g id="Group 1519">
          <path d={svgPaths.p169f0700} fill="var(--fill-0, #13294B)" id="Vector" />
          <path d={svgPaths.paac9500} fill="var(--fill-0, #13294B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Conecte() {
  return (
    <div className="absolute contents left-[238px] top-[12px]" data-name="Conecte">
      <Group38 />
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[264.5px] text-[#13294b] text-[14px] text-center top-[41px] tracking-[0.5px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conecte
      </p>
      <div className="absolute h-[4px] left-[251px] top-[61px] w-[28px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(19, 41, 75, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 4">
            <path d={svgPaths.p3039c00} fill="var(--fill-0, #13294B)" id="Rectangle 356" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Report() {
  return (
    <div className="absolute contents left-[calc(50%+7.5px)] top-[13px] translate-x-[-50%]" data-name="Report">
      <div className="absolute inset-[21.54%_45.05%_47.69%_49.39%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(81, 81, 81, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p20f1140} fill="var(--fill-0, #515151)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[187.5px] text-[#515151] text-[13px] text-center top-[41px] tracking-[0.5px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Relatório
      </p>
    </div>
  );
}

function Mas() {
  return (
    <div className="absolute left-[317px] size-[20px] top-[14px]" data-name="Mas">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Mas">
          <path clipRule="evenodd" d={svgPaths.p555e200} fill="var(--fill-0, #515151)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function More() {
  return (
    <div className="absolute contents left-[317px] top-[14px]" data-name="More">
      <Mas />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[314px] top-[13px]">
      <More />
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[327.5px] text-[#515151] text-[13px] text-center top-[41px] tracking-[0.5px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mais
      </p>
    </div>
  );
}

function Asisstant() {
  return (
    <div className="absolute contents left-[76px] top-[13px]" data-name="Asisstant">
      <div className="absolute inset-[21.54%_67.65%_47.69%_27.5%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(81, 81, 81, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4757 20">
            <path d={svgPaths.p3115df00} fill="var(--fill-0, #515151)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="absolute css-ew64yg font-['Cabin:Regular',sans-serif] font-normal leading-[normal] left-[106.5px] text-[#515151] text-[13px] text-center top-[41px] tracking-[0.5px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assistente
      </p>
    </div>
  );
}

function ButtomNavigationBar() {
  return (
    <div className="absolute bg-white border-[#dcdcdc] border-solid border-t h-[65px] left-1/2 top-[716px] translate-x-[-50%] w-[360px]" data-name="Buttom navigation bar">
      <Home />
      <Conecte />
      <Report />
      <Group39 />
      <Asisstant />
    </div>
  );
}

export default function Op4ConnectLarge() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="Op4-Connect-Large">
      <StatusBar1 />
      <Group34 />
      <Group40 />
      <Header />
      <Component />
      <Platforms1 />
      <PlatformsDropdown />
      <ButtomNavigationBar />
    </div>
  );
}