import { useState } from "react";
import { galleryData } from "../data";

import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";



const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  const { title, btnText, btnIcon, images } = galleryData;

  return (
    <section className="section relative">
      <div className="container mx-auto">
        <div>
          <h2 className="h2 max-w-[370px] lg:mb-20">{title}</h2>
        </div>
      </div>
      <div className="mb-8 lg:mb-20">
        <PhotoAlbum
          layout="rows"
          photos={images}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={images}
          styles={{ container: { backgroundColor: "rgba(0,0,0,0.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-lg btn-dark">
          {btnText} <div className="text-xl">{btnIcon}</div>
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
