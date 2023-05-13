import {RxOpenInNewWindow} from "react-icons/rx";
import {FaRegFolder} from "react-icons/fa";
import {TbBrandGithub} from "react-icons/tb";

interface Props {
  title: string;
  des: string;
  link: string;
  listItem: string[];
  github: string;
}

export default function ArchiveCard({
  title,
  des,
  link,
  listItem,
  github,
}: Props) {
  return (
    <div className="group flex w-full flex-col  justify-center gap-6 rounded-md bg-light1 p-7 text-textDark transition-transform duration-300 hover:-translate-y-2 dark:bg-dark1 dark:text-textLight">
      {/* <a href={link} target="_blank" rel="noopener noreferrer"> */}
      <div className="flex items-center justify-between">
        <div>
          <FaRegFolder className="text-4xl text-textPrimary" />
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <TbBrandGithub className="text-xl hover:text-textPrimary" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <RxOpenInNewWindow className="text-xl hover:text-textPrimary" />
          </a>
        </div>
      </div>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="font-titleFont text-xl font-bold tracking-wide duration-300 group-hover:text-textPrimary">
            {title}
          </h2>
        </a>
        <p className="mt-3 text-sm">{des}</p>
      </div>
      <ul className="flex flex-wrap items-center gap-2 text-sm text-dark2 dark:text-light2">
        {listItem &&
          listItem.map(function (item, i) {
            return (
              <li key={i} className="duration-300 hover:text-textPrimary">
                {item}
              </li>
            );
          })}
      </ul>
      {/* </a> */}
    </div>
  );
}
