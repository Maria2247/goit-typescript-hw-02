import css from "./ImageCard.module.css";
interface ImgCardProps {
  imageItem: {
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  };
  onClick: (regular: string) => void;
}
export default function ImageCard({
  imageItem: {
    urls: { small, regular },
    alt_description,
  },
  onClick,
}: ImgCardProps) {
  return (
    <div className={css.imgHolder}>
      <img
        src={small}
        alt={alt_description}
        onClick={() => onClick(regular)}
        className={css.image}
      />
    </div>
  );
}
