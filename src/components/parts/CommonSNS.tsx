import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon
} from "react-share";

interface Props {
  twURL: string;
  title: string;
}

const CommonSNS: React.VFC<Props> = ({twURL, title}: Props) => {

  return(
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
    </div>

  )
}

export default CommonSNS;
