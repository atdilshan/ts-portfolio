import clsx from "clsx";
import { useTranslation } from 'react-i18next'
import Typed from "react-typed";
import Avatar from "./Avatar";
import Title from "./Title";

export interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(className, 'container mx-auto px-4')}>
      <Avatar />
      <Title />
      <Typed
        strings={[
          t('Hero.typed.text1'),
          t('Hero.typed.text2'),
          t('Hero.typed.text3'),
          t('Hero.typed.text4'),
          t('Hero.typed.text5'),
          t('Hero.typed.text6')
        ]}
        typeSpeed={50}
        backSpeed={50}
        loop
        className={clsx(className, "flex justify-center text-2xl mx-2 text-center h-6 text-yellow-500 pt-2")}
      />
    </div>
  );
};

export default Hero;
