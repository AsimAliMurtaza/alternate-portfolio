import Link from "next/link";

import CenterUnderline from "@/components/fancy/text/underline-center";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out";
import GoesOutComesInUnderline from "@/components/fancy/text/underline-goes-out-comes-in";

export default function ContactSection() {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center justify-center bg-white">
      <div className="flex flex-row font-overused-grotesk items-start text-[#000000] h-full py-36 uppercase space-x-8 text-sm sm:text-lg md:text-xl lg:text-2xl">
        <div>Contact</div>

        <ul className="flex flex-col space-y-2 h-full">
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/asimalimurtaza"
            target="_blank"
          >
            <CenterUnderline>LINKEDIN</CenterUnderline>
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/AsimAliMurtaza" target="_blank">
            <ComesInGoesOutUnderline direction="right">
              GITHUB
            </ComesInGoesOutUnderline>
          </Link>

          {/* Twitter/X */}
          <Link href="https://x.com/asimalimurtaza" target="_blank">
            <ComesInGoesOutUnderline direction="left">
              X (TWITTER)
            </ComesInGoesOutUnderline>
          </Link>

          {/* Reddit */}
          <Link
            href="https://www.reddit.com/user/asimalimurtaza"
            target="_blank"
          >
            <CenterUnderline>REDDIT</CenterUnderline>
          </Link>
          {/* Discord */}
          <Link
            href="https://discordapp.com/users/561874580029833257"
            target="_blank"
          >
            <ComesInGoesOutUnderline direction="right">
              DISCORD
            </ComesInGoesOutUnderline>
          </Link>

          {/* Email Section */}
          <div className="pt-12">
            <ul className="flex flex-col space-y-2 h-full">
              <Link href="mailto:mo.asim.murtaza@gmail.com">
                <GoesOutComesInUnderline direction="left">
                  MO.ASIM.MURTAZA@GMAIL.COM
                </GoesOutComesInUnderline>
              </Link>

              <Link href="https://asimalimurtaza.vercel.app" target="_blank">
                <GoesOutComesInUnderline direction="right">
                  ASIMALIMURTAZA
                </GoesOutComesInUnderline>
              </Link>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}
