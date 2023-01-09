import { gatewayHelper } from "../utility";

export const aboutUsService = {
  getListAboutUs,
  getPhotoGallery,
  getVideoGallery,
  getDetailedPhotoGallery,
  getPublications,
};

async function getListAboutUs() {
  const body = {};
  const response = await gatewayHelper.http("GET", "about-us", body);
  return response;
}

async function getPhotoGallery() {
  const body = {};
  const response = await gatewayHelper.http("GET", "galleries", body);
  return response;
}

async function getDetailedPhotoGallery(galleryId) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "galleries/" + galleryId,
    body
  );
  return response;
}

async function getVideoGallery() {
  const body = {};
  const response = await gatewayHelper.http("GET", "video-galleries", body);
  return response;
}

async function getPublications() {
  const body = {}
  const response = await gatewayHelper.http("GET", "publications", body)
  return response
}
