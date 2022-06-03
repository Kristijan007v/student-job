import toast from "react-hot-toast";
import ClipboardIcon from "../Icons/ClipboardIcon";

interface Props {
  textToCopy: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  style?: string;
}

export default function CopyToClipboard({ textToCopy, style, size }: Props) {
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      toast.success("Copied to clipboard");
      return await navigator.clipboard.writeText(text);
    } else {
      toast.success("Copied to clipboard");
      return document.execCommand("copy", true, text);
    }
  }
  return (
    <div className="hover:cursor-pointer">
      <ClipboardIcon
        onclick={() => copyTextToClipboard(textToCopy)}
        size={size}
        style={style}
      />
    </div>
  );
}
