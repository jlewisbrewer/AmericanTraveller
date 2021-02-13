import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={900}
      height={600}
      viewBox="-1440 -960 2880 1920"
      {...props}
    >
      <defs>
        <clipPath id="prefix__d">
          <path d="M-224 0h448v400h-448z" />
        </clipPath>
        <clipPath id="prefix__f">
          <circle cx={-158} cy={-149} r={324.5} />
        </clipPath>
        <clipPath id="prefix__g">
          <circle cx={-199} cy={-118} r={324.5} />
        </clipPath>
        <clipPath id="prefix__h">
          <circle cx={-212} cy={-100} r={324.5} />
        </clipPath>
        <clipPath id="prefix__e">
          <circle cy={-38} r={576} />
        </clipPath>
        <clipPath id="prefix__k">
          <circle cx={-182} cy={-96} r={324.5} />
        </clipPath>
        <clipPath id="prefix__j">
          <circle cx={-213} cy={-91} r={324.5} />
        </clipPath>
        <clipPath id="prefix__i">
          <circle cx={-234} cy={-64} r={324.5} />
        </clipPath>
        <g id="prefix__l">
          <g id="prefix__b">
            <path
              id="prefix__a"
              d="M0 0v1h.5z"
              fill="#ffde23"
              transform="rotate(18 3.157 -.5)"
            />
            <use xlinkHref="#prefix__a" transform="scale(-1 1)" />
          </g>
          <g id="prefix__c">
            <use xlinkHref="#prefix__b" transform="rotate(72)" />
            <use xlinkHref="#prefix__b" transform="rotate(216)" />
          </g>
          <use xlinkHref="#prefix__c" transform="rotate(72)" />
        </g>
      </defs>
      <path d="M-1440-960h2880V960h-2880z" fill="#0f7562" />
      <g clipPath="url(#prefix__d)" fill="#fff">
        <circle cx={-209} cy={-7} r={324.5} />
        <circle cx={209} cy={-7} r={324.5} />
      </g>
      <circle cx={224} cy={-39} r={324.5} fill="#0f7562" />
      <circle cx={-224} cy={-39} r={324.5} fill="#0f7562" />
      <g clipPath="url(#prefix__e)" fill="#fff">
        <path d="M-500 285.5h291v32h-291zm0 65H500v16H-500zm0 49H500v25H-500zm0 50H500v32H-500zm0 48H500v50H-500zm1000-212H209v32h291z" />
      </g>
      <circle
        cx={158}
        cy={-149}
        r={324.5}
        clipPath="url(#prefix__f)"
        fill="#fff"
      />
      <circle
        cx={199}
        cy={-118}
        r={324.5}
        clipPath="url(#prefix__g)"
        fill="#0f7562"
      />
      <circle cy={-346} r={130} fill="#0f7562" />
      <circle
        cx={212}
        cy={-100}
        r={324.5}
        clipPath="url(#prefix__h)"
        fill="#fff"
      />
      <g id="prefix__m">
        <circle
          cx={-379}
          cy={307}
          r={381.5}
          clipPath="url(#prefix__i)"
          fill="#fff"
        />
        <circle
          cx={-370}
          cy={343}
          r={381.5}
          clipPath="url(#prefix__j)"
          fill="#0f7562"
        />
        <circle cx={-485} cy={21} r={130} fill="#0f7562" />
        <g clipPath="url(#prefix__i)" fill="#fff">
          <circle cx={-339} cy={372} r={381.5} clipPath="url(#prefix__k)" />
          <path d="M-100 50l60 50h50v100h-60z" />
        </g>
        <use
          xlinkHref="#prefix__l"
          transform="rotate(-35 -781.005 208.25) scale(73)"
        />
        <use
          xlinkHref="#prefix__l"
          transform="rotate(-65 -386.535 208.25) scale(73)"
        />
      </g>
      <use xlinkHref="#prefix__m" transform="scale(-1 1)" />
      <use
        xlinkHref="#prefix__l"
        transform="translate(0 -492.5) scale(105.5)"
      />
    </svg>
  );
}

export default SvgComponent;

