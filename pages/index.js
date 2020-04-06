import { useState } from 'react';
import Router from 'next/router'
import fetch from 'node-fetch';
import Layout from '../src/components/layout';
import NewsItem from '../src/components/newsItem';
import styles from './index.module.scss';

const Home = ({ posts }) => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    let nextPage = page+1;
    setPage(nextPage);
    Router.push({
      pathname: '/',
      query: { p: nextPage }
    })
  }

  return (
    <Layout>
      <div className="news-items">
        { posts.hits.map(post => (
          <NewsItem key={post.objectID} item={post} />
        ))}
      </div>
      <div className={styles.more_link}>
        <div className={styles.empty_spacer}></div>
        <a className={styles.anchor} onClick={handleNext}>More</a>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ query }) => {
  let page = query && query.p ? query.p : 0;
  const res = await fetch(`http://hn.algolia.com/api/v1/search?tags=(story,poll)&page=${page}`);
  const posts = await res.json();

  return { props: { posts } }
};

export default Home;
