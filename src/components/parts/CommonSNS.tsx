import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon
} from "react-share";
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface Props {
  twURL: string;
  title: string;
}

const CommonSNS: React.VFC<Props> = ({twURL, title}: Props) => {
  const sendMsg = title + " きやらめるちゃん：" + twURL;
  const encodeTitle = encodeURI(sendMsg);
  const sendURL = `https://line.me/R/share?text=${encodeTitle}`;

  return(
    <>
      <HelmetProvider>
        <Helmet
          title={`きやらめるてスト`}
          meta={[
              { name: 'twitter:card', content: 'summary' },
              { property: 'og:title', content: 'きやらめるてスト' },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: twURL },
              { property: 'og:image', content: "https://mem-kage.github.io/kiyarameruchan/images/sindan/result/kc_ps_item_03.png" },
              { property: 'og:description', content: 'テストテスト' },
          ]}
        />
      </HelmetProvider>

      <div className="common-sns">
        <TwitterShareButton
          url={twURL}
          title={title}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <LineShareButton url={twURL} title={title} >
          <LineIcon size={40} round />
        </LineShareButton>
        <a target="_blank" href={sendURL} rel="noreferrer">ラインで送る</a>

      </div>
    </>
  )
}

export default CommonSNS;
