import { IImage } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface GalleryProps {
  imageObj: IImage[];
  onClick: (largeImg: string) => void;
}
export default function ImageGallery({
  imageObj,
  onClick,
}: GalleryProps): React.ReactElement {
  return (
    <ul className={css.galleryList}>
      {imageObj.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard imageItem={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
