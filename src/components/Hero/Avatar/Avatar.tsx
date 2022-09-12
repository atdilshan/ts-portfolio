import clsx from "clsx";
import avatar from "../../../assets/img/atdilshan-profile.jpg";

export interface Props {
  className?: string;
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(className, "mx-auto flex justify-center w-80 md:w-96 -mb-12")}>
      <span>
        <img src={avatar} alt="" />
      </span>
    </div>
  );
};

export default Avatar;
