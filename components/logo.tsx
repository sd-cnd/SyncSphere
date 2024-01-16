// import Link from "next/link";
// import Image from "next/image";
// import localFont from "next/font/local";

// import { cn } from "@/lib/utils";

// const headingFont = localFont({
//   src: "../public/fonts/font.woff2",
// });

// export const Logo = () => {
//   return (
//     <Link href="/">
//       <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
//         <Image
//           src="/logo2.svg"
//           alt="Logo"
//           height={30}
//           width={30}
//         />
//         <p className={cn(
//           "text-lg text-neutral-700 pt-2 pb-1",
//           headingFont.className,
//         )}>
//           <span className="text-orange-500">SyncSphere</span>
//         </p>
//       </div>
//     </Link>
//   );
// };

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: '../public/fonts/font.woff2',
});

interface LogoProps {
  textColor?: string; // Optional prop for text color
}

const Logo: React.FC<LogoProps> = ({ textColor }) => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo2.svg" alt="Logo" height={30} width={30} />
        <p
          className={cn(
            'text-lg pt-2 pb-1',
            headingFont.className,
            textColor && `text-${textColor}`
          )}
        >
          SyncSphere
        </p>
      </div>
    </Link>
  );
};

export default Logo;



