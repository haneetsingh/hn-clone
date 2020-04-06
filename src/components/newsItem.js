import { useState, useEffect } from 'react';
import { parse } from 'url';
import formatTime from '../helpers/formatTime';
import classNames from 'classnames';
import styles from './newsItem.module.scss';

const NewsItem = ({ item }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [isVoted, setIsVoted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [points, setPoints] = useState(null);
  useEffect(() => {
    let votedList = JSON.parse(localStorage.getItem('upvotedList')) || [];
    let hiddenList = JSON.parse(localStorage.getItem('hiddenList')) || [];

    let currentItem = votedList.filter(ele => ele.objectID === item.objectID);
    if (currentItem.length > 0) {
      setPoints(currentItem['0']['points']);
    }

    let found = votedList.find(ele => ele.objectID === item.objectID);
    if (found) {
      setIsVoted(true);
    }

    let hiddenItem = hiddenList.find(ele => ele === item.objectID);
    if (hiddenItem) {
      setHidden(true);
    }
  }, [points, isVoted, hidden]);

  const handleUpvote = () => {
    setUpvoted(true);
    setPoints(item.points+1);
    const votedList = JSON.parse(localStorage.getItem('upvotedList')) || [];
    const newItem = {
      points: item.points+1,
      objectID: item.objectID
    };
    localStorage.setItem('upvotedList', JSON.stringify([...votedList, newItem]));
  }

  const handleDownvote = () => {
    setIsVoted(false);
    setUpvoted(false);
    setPoints(null);
    const votedList = JSON.parse(localStorage.getItem('upvotedList'));
    const newList = votedList.filter(ele => ele.objectID !== item.objectID);
    localStorage.setItem('upvotedList', JSON.stringify(newList));
  }

  const handleHideItem = () => {
    setHidden(true);
    let hiddenList = JSON.parse(localStorage.getItem('hiddenList')) || [];
    localStorage.setItem('hiddenList', JSON.stringify([...hiddenList, item.objectID]));
  }

  return (
    !hidden &&
      <div className={styles.list}>
        <div className={classNames(styles.list_item, styles.list_item_left)}>
          <div className={styles.num_comments}>
            {item.num_comments}
          </div>
        </div>
        <div className={classNames(styles.list_item, styles.list_item_right)}>
          <div className={styles.points}>
            { points ? points : item.points }
            { (upvoted || isVoted) ?
                <span
                  className={styles.vote_arrow_hidden}
                  onClick={handleDownvote}
                ></span>
              :
                <span
                  className={styles.vote_arrow}
                  onClick={handleUpvote}
                ></span>
            }
          </div>
          <div className={styles.title}>
            <a href={item.url && item.url}>
              {item.title ? item.title : item.story_title}
            </a>
            { item.url &&
              <div className={styles.hostname}>
                (
                  <a style={{ cursor: 'pointer' }}>
                    {parse(item.url).hostname}
                  </a>
                )
              </div>
            }
          </div>
          <div>
            <span className={styles.authored_by_text}>by</span>
            {' '}
            <span className={styles.author_name}>{item.author}</span>
          </div>
          <div className={styles.created_at}>
            {formatTime(item.created_at)}
          </div>
          <div className={styles.hide}>
            [ <a onClick={handleHideItem}>hide</a> ]
          </div>
        </div>
      </div>
  );
}

export default NewsItem;
