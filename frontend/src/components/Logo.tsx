import { forwardRef } from 'react';
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps
{
  disabledLink?: boolean;
}

const Logo = forwardRef<any, Props>(({ disabledLink = false, sx }, ref) =>
{
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box ref={ref} sx={{ width: 90, height: 90, marginRight: theme.spacing(1), cursor: 'pointer', ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 1024 1024">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g xmlns="http://www.w3.org/2000/svg" transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill={PRIMARY_MAIN} stroke="none">
          <path d="M4800 8324 c-19 -3 -102 -11 -185 -20 -773 -77 -1529 -463 -2034 -1038 -561 -638 -826 -1344 -825 -2196 1 -357 37 -611 132 -925 159 -523 480 -1035 878 -1399 391 -358 801 -596 1279 -744 768 -238 1626 -166 2350 195 332 166 589 354 867 635 471 475 780 1054 892 1668 52 285 63 698 26 982 -84 651 -313 1177 -735 1688 -386 468 -939 840 -1505 1013 -316 96 -563 136 -895 142 -115 2 -226 1 -245 -1z m427 -195 c417 -34 816 -152 1158 -341 261 -144 482 -308 695 -514 502 -487 801 -1081 902 -1794 27 -193 29 -554 4 -745 -52 -397 -165 -750 -337 -1061 -207 -373 -466 -681 -804 -957 -410 -336 -897 -547 -1460 -633 -171 -27 -649 -27 -815 -1 -400 63 -774 192 -1110 385 -246 141 -518 361 -713 577 -605 671 -877 1514 -773 2400 86 728 391 1353 901 1843 430 414 939 684 1488 791 291 57 582 74 864 50z" />
          <path d="M4824 7761 c-164 -47 -316 -163 -400 -307 -71 -120 -98 -292 -68 -429 27 -128 38 -115 -116 -141 -264 -44 -540 -127 -700 -210 -107 -55 -234 -155 -289 -229 -72 -95 -94 -161 -99 -295 -5 -127 6 -196 45 -278 28 -60 112 -155 184 -208 39 -29 49 -42 49 -65 l0 -29 -155 0 c-139 0 -156 2 -161 18 -3 9 -17 43 -32 75 -61 134 -212 206 -372 177 -126 -23 -215 -91 -273 -209 l-32 -65 -5 -311 c-5 -302 -6 -311 -30 -360 -32 -68 -39 -197 -15 -280 22 -78 64 -159 116 -226 33 -42 706 -726 1043 -1059 55 -55 84 -66 132 -50 53 18 79 83 53 132 -6 12 -118 127 -248 257 -130 130 -374 376 -542 546 -281 284 -309 316 -343 386 -31 63 -38 87 -38 141 0 94 28 141 105 173 48 20 83 19 133 -4 53 -24 79 -52 116 -126 26 -51 100 -129 477 -503 245 -244 471 -466 501 -494 58 -54 90 -70 244 -124 164 -57 207 -85 360 -234 201 -196 311 -323 352 -405 52 -107 63 -177 69 -475 4 -146 8 -274 10 -286 7 -32 64 -58 108 -50 69 13 71 22 78 356 10 441 16 455 342 786 224 228 232 234 463 320 88 32 167 69 198 91 40 29 610 585 922 899 37 36 57 67 69 105 40 122 93 169 191 169 111 0 169 -65 168 -190 -1 -75 -24 -141 -77 -221 -20 -30 -277 -294 -571 -587 -521 -518 -536 -534 -536 -571 0 -79 77 -124 141 -83 17 11 276 264 574 562 579 578 595 596 637 735 25 81 29 207 8 270 -10 29 -15 135 -19 380 l-6 340 -28 59 c-47 101 -140 172 -259 197 -57 13 -119 7 -192 -17 -68 -23 -167 -121 -192 -192 l-19 -52 -181 0 c-99 0 -183 2 -186 5 -17 17 12 55 74 100 148 106 227 256 228 431 1 297 -209 520 -619 660 -167 56 -503 134 -582 134 -16 0 -30 4 -33 9 -4 5 1 38 9 73 20 84 19 253 -1 332 -27 103 -80 193 -169 281 -87 88 -178 141 -290 170 -81 21 -242 19 -321 -4z m271 -175 c158 -38 298 -178 334 -337 24 -104 6 -235 -47 -333 -39 -74 -129 -159 -209 -197 -58 -28 -82 -34 -159 -37 -148 -7 -255 36 -361 146 -233 239 -115 660 211 753 75 22 152 23 231 5z m-547 -909 c113 -104 193 -146 325 -173 203 -41 398 21 567 182 l45 43 120 -15 c402 -50 805 -192 876 -308 43 -70 20 -131 -74 -197 -183 -128 -592 -228 -1062 -260 -214 -14 -651 -7 -850 15 -629 69 -1052 234 -1021 400 8 44 75 106 167 155 176 95 569 194 832 210 9 1 43 -23 75 -52z m-967 -685 c181 -88 440 -152 790 -196 512 -65 897 -59 1409 20 360 56 665 162 794 276 l46 40 0 -95 c0 -82 -3 -98 -22 -123 -135 -176 -523 -308 -1113 -380 -180 -22 -613 -30 -800 -15 -622 50 -1088 180 -1272 356 l-63 60 0 103 0 103 64 -49 c35 -27 110 -72 167 -100z m-733 -362 c67 -30 72 -52 72 -302 0 -117 -3 -230 -6 -251 -6 -34 -8 -36 -23 -23 -49 42 -106 60 -201 63 l-95 2 -3 186 c-3 212 6 250 71 299 63 49 118 56 185 26z m4478 -19 c64 -47 69 -65 72 -289 l3 -203 -38 8 c-57 12 -172 6 -221 -11 -37 -13 -44 -13 -48 -1 -3 8 -4 110 -2 227 3 236 8 255 73 284 43 20 124 13 161 -15z m-3575 -116 c295 -100 655 -150 1154 -162 285 -6 463 2 710 33 202 25 479 82 597 124 l111 39 -6 -87 c-18 -257 -88 -1130 -97 -1212 l-11 -95 -102 -97 c-120 -114 -170 -146 -332 -205 -140 -52 -202 -82 -264 -128 -42 -31 -299 -287 -464 -462 l-69 -73 -25 33 c-14 17 -139 145 -277 282 -281 280 -290 287 -509 359 -191 64 -217 82 -383 267 -40 45 -42 49 -48 130 -25 345 -38 515 -51 654 -15 161 -45 571 -45 613 0 12 2 22 4 22 2 0 50 -16 107 -35z m-297 -202 c22 -238 68 -862 64 -878 -2 -9 -87 69 -205 187 l-203 201 0 278 0 279 169 0 168 0 7 -67z m3446 -191 l0 -259 -225 -224 c-124 -123 -229 -225 -233 -227 -8 -2 2 151 43 643 14 165 25 306 25 313 0 9 47 12 195 12 l195 0 0 -258z" />
          <path d="M4950 7425 c0 -15 -7 -28 -17 -32 -72 -26 -118 -99 -110 -176 7 -76 29 -99 152 -154 31 -14 40 -23 40 -43 0 -24 -2 -25 -77 -28 -66 -2 -79 -6 -89 -23 -14 -27 21 -81 67 -103 20 -9 34 -24 36 -38 2 -19 10 -24 41 -26 35 -3 37 -2 37 26 0 23 7 34 34 50 55 32 87 83 88 139 2 83 -23 115 -133 171 -56 28 -70 52 -48 79 10 12 25 14 70 9 45 -5 60 -3 73 9 31 31 11 72 -51 104 -15 7 -23 21 -23 36 0 23 -4 25 -45 25 -41 0 -45 -2 -45 -25z" />
          <path d="M4805 6260 c-175 -19 -447 -86 -502 -125 -30 -21 -29 -58 1 -78 40 -26 142 -57 244 -73 221 -35 751 -29 947 12 99 20 179 62 183 94 2 21 -4 30 -35 47 -166 91 -574 151 -838 123z" />
          <path d="M4973 4593 l-33 -4 0 -220 0 -219 50 0 50 0 0 75 0 75 48 0 c66 0 118 17 154 49 27 24 32 36 35 87 7 109 -48 154 -191 159 -45 2 -96 1 -113 -2z m187 -103 c25 -25 25 -51 2 -80 -13 -16 -29 -22 -67 -23 l-50 -2 -3 63 -3 62 51 0 c37 0 55 -5 70 -20z" />
          <path d="M4607 4583 c-23 -38 -167 -408 -167 -428 0 -3 22 -5 48 -5 l48 0 21 50 22 51 83 -3 82 -3 17 -45 c16 -45 17 -45 68 -48 28 -2 51 1 51 7 0 14 -88 245 -130 341 l-37 85 -51 3 c-27 2 -52 -1 -55 -5z m86 -176 c15 -41 27 -77 27 -80 0 -4 -27 -7 -60 -7 -33 0 -60 3 -60 8 0 15 53 152 59 152 4 0 19 -33 34 -73z" />
          <path d="M5320 4550 l0 -40 70 0 70 0 0 -180 0 -180 50 0 50 0 0 180 0 180 65 0 65 0 0 40 0 40 -185 0 -185 0 0 -40z" />
        </g>
      </svg>
      
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
          />
          <path
            fill="url(#BG2)"
            d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
          />
          <path
            fill="url(#BG3)"
            d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
          />
        </g>
      </svg> */}
    </Box>
  );

  if (disabledLink)
  {
    return <>{logo}</>;
  }

  return <NextLink href="/dashboard">{logo}</NextLink>;
});

export default Logo;
