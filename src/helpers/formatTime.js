export default function formatTime(createdAt) {
  const date = new Date(createdAt);
  const now = +new Date();
  const timeAgo = now - date.getTime();

  const ONE_YEAR = 3.154e10;
  const ONE_MONTH = 2.628e9;
  const ONE_DAY = 8.64e7;
  const ONE_HOUR = 3.6e6;
  const ONE_MINUTE = 60000;

  switch (true) {
    case timeAgo >= ONE_YEAR * 2:
      return `${Math.floor(timeAgo / ONE_YEAR)} years ago`;

    case timeAgo >= ONE_YEAR:
      return 'a year ago';

    case timeAgo >= ONE_MONTH * 2:
      return `${Math.floor(timeAgo / ONE_MONTH)} months ago`;

    case timeAgo >= ONE_MONTH:
      return '1 month ago';

    case timeAgo >= ONE_DAY * 2:
      return `${Math.floor(timeAgo / ONE_DAY)} days ago`;

    case timeAgo >= ONE_DAY:
      return '1 day ago';

    case timeAgo >= ONE_HOUR * 2:
      return `${Math.floor(timeAgo / ONE_HOUR)} hours ago`;

    case timeAgo >= ONE_HOUR:
      return '1 hour ago';

    case timeAgo >= ONE_MINUTE * 2:
      return `${Math.floor(timeAgo / ONE_MINUTE)} minutes ago`;

    case timeAgo >= 0:
      return '1 minute ago';

    default:
      // timeAgo < 0 is in the future
      throw new Error(
        `formatTime: number ${number} timeAgo ${timeAgo}, is date older than 1970 or in the future?`
      );
  }
}