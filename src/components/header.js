import Link from 'next/link';
import * as React from 'react';

function Header() {
  return (
    <tr>
      <td style={{ backgroundColor: '#ff6600', padding: '0px' }}>
      <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{ padding: '2px'}}>
        <tbody>
          <tr>
            <td style={{ width: '18px', padding: '0px', paddingRight: '4px' }}>
              <Link href="/">
                <a>
                  <img
                    src="./static/y18.gif"
                    style={{
                      border: '1px',
                      borderColor: 'white',
                      borderStyle: 'solid',
                      height: '18px',
                      width: '18px',
                    }}
                  />
                </a>
              </Link>
            </td>
            <td style={{ lineHeight: '12px', height: '10px', padding: '0' }}>
              <span className="pagetop">
                <b className="hnname">
                  <a>Hacker News</a>
                </b>
                <a>new</a>
                {' | '}
                <a>past</a>
                {' | '}
                <a>comments</a>
                {' | '}
                <a>ask</a>
                {' | '}
                <a>show</a>
                {' | '}
                <a>jobs</a>
                {' | '}
                <a>submit</a>
              </span>
            </td>
            <td style={{ textAlign: 'right', paddingRight: '4px' }}>
              <span className="pagetop">
                <a>login</a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      </td>
    </tr>
  );
}

export default Header;
