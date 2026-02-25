import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

const HeroTitle = () => {
  const { t } = useLanguage()

  return (
    <h1 className="text-5xl font-bold flex gap-2 justify-center">
      <motion.span>{t.hero.hello}</motion.span>
      <motion.span>{t.hero.iam}</motion.span>
      <motion.span className="text-purple-500">
        {t.hero.name}
      </motion.span>
    </h1>
  )
}

export default HeroTitle