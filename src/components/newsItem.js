import { parse } from 'url';
import formatTime from '../helpers/formatTime';

function NewsItem({ item, rank }) {
  return (
    <>
      <tr className="athing">
        <td style={{ textAlign: 'right', verticalAlign: 'top' }} className="title">
          <span className="rank">{rank}</span>
        </td>
        <td style={{ verticalAlign: 'top' }} className="votelinks">
          <div style={{ textAlign: 'center' }}>
            <a
              style={{ cursor: 'pointer' }}
            >
              <div className="votearrow" title="upvote" />
            </a>
          </div>
        </td>
        <td className="title">
          <a
            className="storylink"
            href={item.url}
          >
            {item.title}
          </a>
          { item.url &&
            <span className="sitebit comhead">
              {' '}
              (
                <a style={{ cursor: 'pointer' }}>
                  <span className="sitestr">
                    {parse(item.url).hostname}
                  </span>
                </a>
              )
            </span>
          }
        </td>
      </tr>
      <tr>
        <td colSpan={2} />
        <td className="subtext">
          <span className="score">{item.points} points</span>
          {' by '}
          <a className="hnuser" style={{ cursor: 'pointer' }}>{item.author}</a>
          {' '}
          <span className="age">{formatTime(item.created_at)}</span>
          {' | '}
          <a>hide</a>
          {' | '}
          <a>
            {item.num_comments === 0
              ? 'discuss'
              : item.num_comments === 1
              ? '1 comment'
              : `${item.num_comments} comments`}
          </a>
        </td>
      </tr>
    </>
  );
}

export default NewsItem;
