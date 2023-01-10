import React from "react";

export const NewsGalleryTitle = (lang) => {
  var text =
    lang === "en" ? (
      <>News and Gallery</>
    ) : lang === "id" ? (
      <>Berita dan galeri</>
    ) : lang === "cn" ? (
      <>News and Gallery</>
    ) : (
      <> </>
    );

  return text;
};

export const PublicationsTitle = (lang) => {
  var text =
    lang === "en" ? (
      <>Publications</>
    ) : lang === "id" ? (
      <>Publikasi</>
    ) : lang === "cn" ? (
      <>Publications</>
    ) : (
      <> </>
    );

  return text;
};

export const NewsGallerySidebar = (data, lang, index) => {
  var text =
    lang === "en" ? (
      <>{data[index].en}</>
    ) : lang === "id" ? (
      <>{data[index].id}</>
    ) : lang === "cn" ? (
      <>{data[index].ch}</>
    ) : (
      <> </>
    );

  return text;
};
