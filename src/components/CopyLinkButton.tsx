import { useState } from "react";
import { useT } from "../i18n";
import { copyText, shareUrl } from "../lib/clipboard";

/** Small ghost button that copies the deep link for an in-app hash route. */
export default function CopyLinkButton({ hash }: { hash: string }) {
  const t = useT();
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="btn btn--ghost btn--sm copy-link-btn"
      onClick={async () => {
        if (await copyText(shareUrl(hash))) {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        }
      }}
    >
      {copied ? t("copied") : t("copy_link")}
    </button>
  );
}
