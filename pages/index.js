import fetch from 'node-fetch';
import Layout from "../src/components/layout"
import NewsItem from '../src/components/newsItem';


const Home = ({ posts }) => {
  return (
    <Layout>
      <tr>
        <td>
          <table>
            <tbody>
              { posts.hits.map((post, index) => (
                <NewsItem
                  key={post.objectID}
                  item={post}
                  rank={index+1}
                />
              ))}
            </tbody>
          </table>
        </td>
      </tr>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://hn.algolia.com/api/v1/search?tags=front_page');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  }
};

export default Home;
