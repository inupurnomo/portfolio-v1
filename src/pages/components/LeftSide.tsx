import {TbBrandCodepen, TbBrandTwitter} from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialGithub,
} from "react-icons/sl";
import { socialMedia } from "@/data";

export default function LeftSide() {
  return (
    <div className="-ml-5 hidden h-full w-full flex-col items-center justify-end gap-4 text-textDark dark:text-textLight mdl:flex">
      <div className="flex flex-col gap-2">
        {socialMedia &&
          socialMedia.map(function (soc) {
            return (
              <a
                key={soc.id}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center text-xl transition-all duration-300 hover:-translate-y-2">
                  {soc.icon}
                </span>
              </a>
            );
          })}
      </div>
      <div className="h-20 w-[1px] bg-textDark dark:bg-textLight"></div>
    </div>
  );
}
