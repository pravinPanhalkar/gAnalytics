import React from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  EmailIcon,
  WhatsappIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookShareCount,
  OKShareButton,
  WhatsappShareCount,
} from "react-share";

// const { FacebookShareButton, TwitterShareButton, EmailShareButton } =
//   ShareButtons;

const ShareDemo = (props) => {
  const size = "2.5rem";
  const shareUrl = "http://google.com";
  //   const imageUrl =
  //     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  const shareImage1 =
    "https://www.steadylearner.com/static/images/brand/prop-passer.png";
  const title = "Share Demo";

  return (
    <div>
      {navigator.appVersion.indexOf("Win") ? (
        <div>
          <span>Windows</span>
        </div>
      ) : navigator.appVersion.indexOf("Mac") ? (
        <div>
          <span>Mac</span>
        </div>
      ) : null}
      <hr />
      <FacebookShareButton url={shareUrl} title={title}>
        <FacebookIcon size={size} round={true} />
      </FacebookShareButton>
      &nbsp;
      <EmailShareButton url={shareUrl} title={title} media={shareImage1}>
        <EmailIcon size={size} round={true} />
      </EmailShareButton>
      &nbsp;
      <WhatsappShareButton
        url={shareUrl}
        title={title}

        // media={`${shareImage1}`}
      >
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>
      <FacebookShareCount url={shareImage1} />
      &nbsp;
      <LinkedinShareButton
        url={shareUrl}
        className="Demo__some-network__share-button"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      &nbsp;
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      &nbsp;
    </div>
  );
};

export default ShareDemo;
