import { parse } from 'url';
import formatTime from '../helpers/formatTime';
import styles from './NewsItem.module.scss';
import { useState } from 'react';

const NewsItem = ({ item }) => {
  const [upvoted, setUpvoted] = useState(true);
  const handleUpvote = () => {
    setUpvoted(false);
    const upvotedList = JSON.parse(localStorage.getItem('upvotedList')) || [];
    const updatedItem = {
      key: item.objectID,
      points: upvoted ? item.points+1 : item.points-1,
      upvoted: upvoted
    };
    localStorage.setItem('upvotedList', JSON.stringify([...upvotedList, updatedItem]));
  }

  return (
    <div className={styles.list}>
      <div className={styles.num_comments}>
        {item.num_comments}
      </div>
      <div className={styles.points}>
        {item.points}
        <span className={styles.vote_arrow} onClick={handleUpvote}></span>
      </div>
      <div className={styles.title}>
        <a href={item.url && item.url}>
          {item.title ? item.title : item.story_title}
        </a>
      </div>
      { item.url &&
        <div className={styles.hostname}>
          (
            <a style={{ cursor: 'pointer' }}>
              {parse(item.url).hostname}
            </a>
          )
        </div>
      }
      <div className="authored-by">
        <span className={styles.authored_by_text}>by</span>
        {' '}
        <span className="author-name">{item.author}</span>
      </div>
      <div className={styles.created_at}>{formatTime(item.created_at)}</div>
      <div className={styles.hide}>
        [ <a>hide</a> ]
      </div>
    </div>
  );
}

export default NewsItem;
