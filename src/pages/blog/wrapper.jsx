import { useState, useEffect } from 'react';
import { ContactSection } from '@/components/home/ContactSection';
import { Container } from '@/components/home/Container';
import { FadeIn } from '@/components/home/FadeIn';
import { MDXComponents } from '@/components/home/MDXComponents';
import { PageLinks } from '@/components/home/PageLinks';
import { formatDate } from '@/lib/formatDate';
import { loadMDXMetadata } from '@/lib/loadMDXMetadata';

export default function BlogArticleWrapper({ children, _segments }) {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    async function fetchArticleData() {
      let id = _segments.at(-2);
      let allArticles = await loadMDXMetadata('blog');
      let article = allArticles.find((article) => article.id === id);
      setArticleData(article);
    }

    fetchArticleData();
  }, [_segments]);

  if (!articleData) {
    // Pode mostrar um loader enquanto os dados estão sendo buscados.
    return null;
  }

  let moreArticles = allArticles
    .filter((article) => article.id !== articleData.id)
    .slice(0, 2);

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {articleData.title}
            </h1>
            <time
              dateTime={articleData.date}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(articleData.date)}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              by {articleData.author.name}, {articleData.author.role}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreArticles}
        />
      )}

      <ContactSection />
    </>
  );
}
