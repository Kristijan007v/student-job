import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";

interface Props {
  url: string;
  iconSize?: "sm" | "md" | "lg" | "xl" | "xxl";
  iconStyle?: string;
  style?: string;
  bgColor?: string;
}

export default function SocialShare({
  url,
  iconSize,
  style,
  bgColor,
  iconStyle,
}: Props) {
  return (
    <div
      className={`flex items-center justify-center space-x-6 ${
        bgColor ? bgColor : "bg-transparent"
      } p-5 ${style}`}
    >
      <FacebookShareButton
        quote="20.456 People have brought the light to UA. Join them."
        hashtag="#ukraine"
        url={url}
      >
        <FacebookIcon size={iconSize} style={iconStyle} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={iconSize} style={iconStyle} />
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={iconSize} style={iconStyle} />
      </WhatsappShareButton>
      <CopyToClipboard textToCopy={url} size={iconSize} style={iconStyle} />
    </div>
  );
}
