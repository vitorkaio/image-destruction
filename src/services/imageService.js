import Unsplash from 'unsplash-js';

/* eslint-disable */

// 1920 x 1080

// const apiKey = "563492ad6f91700001000001a85ad4750cdc4174aee1d9f764a0cf42";
const client_key = "ae8f4160ae25deeef4e47b49340124ac50b6765f362d99cdf6e22795b61e34e3";
const secret_key = "b22e5a3bbc7c63511db5c8e6a81fb8bc3e96a8e7ee5a00c9790973e816356c9c";

class ImageService {

  constructor() {
    this.unsplash = new Unsplash({
      applicationId: client_key,
      secret: secret_key
    });
  }
  
  async getRandomImage() {
    return new Promise((resolve) => {
      this.unsplash.photos.listPhotos(1, 15, "latest")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        resolve(data);
      });
    }).catch(error => {
      // console.log(error);
      resolve(null);
    })
  }
}

export default ImageService;