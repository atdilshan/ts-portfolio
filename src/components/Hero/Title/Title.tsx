import clsx from "clsx";
import { useTranslation } from "react-i18next";

export interface Props {
  className?: string;
}

const Title = ({ className }: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={clsx(className, "flex justify-center")}>
      <span
        className={clsx(
          className,
          i18n.language === "ta" ? "" : "font-accent",
          "text-5xl md:text-7xl",
          "-rotate-3 duration-700",
          "hover:-rotate-2"
        )}
      >
        {t("Hero.title")}
      </span>
    </div>
  );
};

export default Title;
