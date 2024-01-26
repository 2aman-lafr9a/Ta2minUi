import React, { FC, SVGProps } from "react";

interface StarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const StarIcon: FC<StarIconProps> = ({ size = 24, width, height, ...props }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 26.9 25.65"
    xmlSpace="preserve"
    width={size || width}
    height={size || height}
    {...props}
  >
    <style type="text/css">
      {`.st0{clip-path:url(#SVGID_2_);}
      .st1{fill:#FFD401;}`}
    </style>
    <g>
      <g>
        <defs>
          <path
            id="SVGID_1_"
            d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z"
          />
        </defs>
        <clipPath id="SVGID_2_">
          <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
        </clipPath>
        <g className="st0">
          <defs>
            <rect id="SVGID_3_" x="-0.08" y="-0.1" width="27.01" height="25.85" />
          </defs>
          <clipPath id="SVGID_4_">
            <use xlinkHref="#SVGID_3_" style={{ overflow: "visible" }} />
          </clipPath>
          <g style={{ clipPath: "url(#SVGID_4_)" }}>
            <image
              style={{ overflow: "visible" }}
              width="64"
              height="57"
              xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAJIAAACsAAAA4b/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIADwAQwMBIgACEQEDEQH/ xACiAAADAQEBAQAAAAAAAAAAAAAABAUCAQMGAQACAwEAAAAAAAAAAAAAAAAAAwQFBgIQAAIABQME AwAAAAAAAAAAAAARAQIDBAUTJBUSIzMlMhQ0EQABAQYGAQUAAAAAAAAAAAABABAgEXGhMrECEkJy AzEhUSITFBIAAgADBAgHAQAAAAAAAAAAAQIAEAMhMaEiUXGBkbHRMtIRYRJykjNzQv/aAAwDAQAC EQMRAAAA+68SfRyaBPIrKBPAoektl3NMDQREp1Cbmp+jJAbruANsptSOKwGsrkJlKXnLHRkgu0ZA 00m2/iyBqqudKto0FikOkNyQ6Ak51h66IGkrP//aAAgBAgABBQC/v7ijccreHK3hbZG6nrmUhu0I s4bkycN2hFnDcmRkljc6chpyFrJLC4P/2gAIAQMAAQUApUpJpNCmaFMnoyQlLeHbQirDtltDtIRW h2y2mjCl1ROqJVmjpn//2gAIAQEAAQUAr14UIcjIcjIcjIcjIcjIcjIUbyWtOZH4MYxjGWH6DJfB jGMYzH/oMp42MYxjMdHcmV8bGMYxmNjujL+NjGMYzGR3RmPExjGMZi/1l/8AV6PUnqT1J6k9SepL L6Guf//aAAgBAgIGPwBqdNgFAX+QbxHWPiI6x8RFNGcFXcA5RcZPqXhOj+iyfUvCdH9FkxNRFsWw +rR5Ax9tPc/bH209z9sUiKiHOtgDdsv/2gAIAQMCBj8ABIti7GLsYJAuEhtm3tMhtm/tMhlJvu8O cdDYc46Gw5w+VhlOjnL/2gAIAQEBBj8ABIJiYeisKsKsKsKsKsK0DKQYRizJMviRZkmcHxIsyTOD 4kWdczg+JFnXyOD44lnXyOD44lmT9MdMfjp91vqt9Vvqt9Vvqt9UPz6vsgfPiDP/2Q=="
              transform="matrix(0.48 0 0 -0.48 -1.1399 26.7469)"
            />
          </g>
        </g>
      </g>
      <path className="st1" d="M14.1,0.43l3.44,8.05l8.72,0.78c0.39,0.03,0.67,0.37,0.64,0.76c-0.02,0.19-0.1,0.35-0.24,0.47l0,0 l-1.18,1.03 c-3.21,1.11-7.42,1.78-12.03,1.78c-4.61,0-8.83-0.67-12.03-1.78l-1.18-1.03c-0.29-0.25-0.32-0.7-0.07-0.99 C0.3,9.35,0.48,9.28,0.66,9.27l8.7-0.78l3.44-8.06c0.15-0.36,0.56-0.52,0.92-0.37C13.9,0.13,14.03,0.27,14.1,0.43L14.1,0.43 L14.1,0.43z" />
    </g>
  </svg>
);

export default StarIcon;
