export default function ShrineSkyline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMidYMax meet"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldDome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1DCA3" />
          <stop offset="45%" stopColor="#C9A24B" />
          <stop offset="100%" stopColor="#6B5220" />
        </linearGradient>
        <linearGradient id="darkBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2620" />
          <stop offset="100%" stopColor="#0A0908" />
        </linearGradient>
        <radialGradient id="domeShine" cx="0.38" cy="0.28" r="0.7">
          <stop offset="0%" stopColor="#FFF3D0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFF3D0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* far skyline */}
      <path
        d="M0 420 L0 360 L120 360 L120 330 Q150 290 180 330 L180 360 L320 360 L320 345 L360 345 L360 320 Q380 295 400 320 L400 360 L560 360 L560 340 L1000 340 L1000 360 L1120 360 L1120 335 Q1145 300 1170 335 L1170 360 L1300 360 L1300 345 L1440 345 L1440 420 Z"
        fill="#141210"
      />

      {/* left minaret */}
      <g>
        <rect x="330" y="150" width="26" height="230" fill="url(#darkBody)" />
        <rect x="324" y="196" width="38" height="10" fill="url(#goldDome)" />
        <path d="M327 150 Q343 96 359 150 Z" fill="url(#goldDome)" />
        <rect x="341" y="86" width="4" height="14" fill="#C9A24B" />
        <circle cx="343" cy="82" r="4" fill="#EBCB82" />
      </g>

      {/* right minaret */}
      <g>
        <rect x="1084" y="150" width="26" height="230" fill="url(#darkBody)" />
        <rect x="1078" y="196" width="38" height="10" fill="url(#goldDome)" />
        <path d="M1081 150 Q1097 96 1113 150 Z" fill="url(#goldDome)" />
        <rect x="1095" y="86" width="4" height="14" fill="#C9A24B" />
        <circle cx="1097" cy="82" r="4" fill="#EBCB82" />
      </g>

      {/* central shrine body */}
      <rect x="500" y="250" width="440" height="170" fill="url(#darkBody)" />
      <rect x="490" y="240" width="460" height="14" fill="#211D18" />

      {/* arched iwan gate */}
      <path
        d="M660 420 L660 330 Q720 268 780 330 L780 420 Z"
        fill="#0A0908"
        stroke="#C9A24B"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <path
        d="M676 420 L676 340 Q720 292 764 340 L764 420 Z"
        fill="#161310"
        stroke="#C9A24B"
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />

      {/* small side arches */}
      {[532, 576, 828, 872].map((x) => (
        <path
          key={x}
          d={`M${x} 420 L${x} 350 Q${x + 18} 326 ${x + 36} 350 L${x + 36} 420 Z`}
          fill="#100E0C"
          stroke="#C9A24B"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
      ))}

      {/* dome drum */}
      <rect x="640" y="188" width="160" height="66" fill="url(#darkBody)" />
      <rect x="640" y="188" width="160" height="8" fill="url(#goldDome)" />

      {/* great golden dome */}
      <path
        d="M636 190 Q636 96 720 74 Q804 96 804 190 Z"
        fill="url(#goldDome)"
      />
      <path
        d="M636 190 Q636 96 720 74 Q804 96 804 190 Z"
        fill="url(#domeShine)"
      />
      {/* dome ribs */}
      {[672, 696, 720, 744, 768].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${i === 2 ? 74 : i === 1 || i === 3 ? 80 : 96} Q${x} 140 ${x} 190`}
          stroke="#6B5220"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          fill="none"
        />
      ))}
      {/* finial */}
      <rect x="717" y="46" width="6" height="28" fill="#C9A24B" />
      <circle cx="720" cy="40" r="6" fill="#EBCB82" />
      <circle cx="720" cy="28" r="3.5" fill="#F5E3AE" />

      {/* twin small domes */}
      <path d="M520 250 Q520 208 552 200 Q584 208 584 250 Z" fill="url(#goldDome)" />
      <path d="M856 250 Q856 208 888 200 Q920 208 920 250 Z" fill="url(#goldDome)" />
      <rect x="550" y="184" width="4" height="18" fill="#C9A24B" />
      <rect x="886" y="184" width="4" height="18" fill="#C9A24B" />
      <circle cx="552" cy="180" r="3.5" fill="#EBCB82" />
      <circle cx="888" cy="180" r="3.5" fill="#EBCB82" />

      {/* string lights */}
      <path
        d="M356 210 Q540 260 660 232"
        stroke="#C9A24B"
        strokeOpacity="0.4"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M780 232 Q900 260 1084 210"
        stroke="#C9A24B"
        strokeOpacity="0.4"
        strokeWidth="1"
        fill="none"
      />
      {[420, 480, 540, 600, 840, 900, 960, 1020].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={i < 4 ? 236 + (i % 2) * 8 : 240 - (i % 2) * 6}
          r="2.4"
          fill="#EBCB82"
          opacity="0.9"
        />
      ))}

      {/* ground */}
      <rect x="0" y="404" width="1440" height="16" fill="#0A0908" />
    </svg>
  );
}
