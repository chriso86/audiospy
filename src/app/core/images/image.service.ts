import {Injectable} from "@angular/core";
import {ImageResponse} from "../gateways/spotify/interfaces/image.response";

@Injectable()
export class ImageService {
  getImageForArtist(images: ImageResponse[]) {
    // TODO: Chris - Consume this to responsively load images (Nice-to-have and check use case - might be overkill)
    // const browserWidth = BrowserHelper.getWidth();
    // const isMobile = browserWidth <= SCREEN_BREAKPOINTS.sm;

    if (!images || !images.length) {
      return null;
    }

    const smallest = images.reduce((smallest: ImageResponse, image: ImageResponse) => {
      return image.width < smallest.width ? image : smallest;
    }, images[0]);

    if (smallest) {
      return smallest.url;
    }

    return false;
  }
}
