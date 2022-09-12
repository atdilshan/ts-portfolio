import clsx from "clsx";
import { useTranslation } from "react-i18next";

export interface Props {
  className?: string;
}

const Biography = ({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx("flex container my-8 mx-auto p-4 max-w-lg", className)}
    >
      <div className={clsx("border b-2 rounded p-4")}>
        <p className={clsx("pb-4")}>
          <span>{t("Biography.bio1")}</span>
          <span>{t("Biography.bio2")}</span>
          <span>{t("Biography.bio3")}</span>
          <span>{t("Biography.bio4")}</span>
        </p>
        <p className={clsx("pb-4")}>
          {t("Biography.bio5")}
        </p>
        <p>
          <span>{t("Biography.bio6")}</span>
          <a href="mailto:atdilshan0127@gmail.com">{t("Biography.email")}</a>
          <span>{t("Biography.bio7")}</span>
        </p>
      </div>
    </div>
  );
};

export default Biography;
