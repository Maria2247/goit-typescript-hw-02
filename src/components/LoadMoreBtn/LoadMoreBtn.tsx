import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreProp {
  onClick: () => void;
  id: string;
}

export default function LoadMoreBtn({
  onClick,
}: LoadMoreProp): React.ReactElement {
  return (
    <button onClick={onClick} className={css.btn}>
      Load more
    </button>
  );
}
