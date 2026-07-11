import { motion } from "framer-motion";
import { articles } from "../data/portfolio";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import HorizontalScroller from "../components/HorizontalScroller";
import ArticleCard from "../components/ArticleCard";

export default function Articles() {
  return (
    <section
      id="articles"
      className="scroll-mt-20 bg-slate-100/50 py-24 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Writing & sharing"
          title="Articles"
          subtitle="Thoughts and tutorials I've published on Medium and LinkedIn."
        />

        <ScrollReveal>
          <HorizontalScroller ariaLabel="Articles">
            {articles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </HorizontalScroller>
        </ScrollReveal>
      </div>
    </section>
  );
}
