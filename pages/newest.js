import { useState } from 'react';
import Router from 'next/router'
import fetch from 'node-fetch';
import Layout from "../src/components/Layout";
import NewsItem from '../src/components/NewsItem';

const Newest = ({ posts }) => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    let nextPage = page+1;
    setPage(nextPage);
    Router.push({
      pathname: '/newest',
      query: { p: nextPage }
    })
  }

  return (
    <Layout>
      <div className="news-items">
        { posts.hits.map(post => (
          <NewsItem
            key={post.objectID}
            item={post}
          />
        ))}
      </div>
      <div style={{ padding: '20px', marginInlineStart: '120px' }}>
        <a style={{ color: '#ff6600', cursor: 'pointer' }} onClick={handleNext}>More</a>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  let page = query && query.p ? query.p : 0;
  const res = await fetch(`http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  }
};

export default Newest;
