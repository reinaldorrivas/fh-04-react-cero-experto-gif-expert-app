export interface GiphyResponseProps {
  alt_text: string;
  analytics_response_payload: string;
  analytics: Analytics;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: Images;
  import_datetime: Date;
  is_sticker: number;
  rating: string;
  slug: string;
  source_caption: string;
  source_post_url: string;
  source_tld: string;
  source: string;
  title: string;
  trending_datetime: string;
  type: string;
  url: string;
  user: User;
  username: string;
}

export interface Analytics {
  onclick: Onclick;
  onload: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  "480w_still": The480_WStill;
  downsized_large: The480_WStill;
  downsized_medium: The480_WStill;
  downsized_small: DownsizedSmall;
  downsized_still: The480_WStill;
  downsized: The480_WStill;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small_still: The480_WStill;
  fixed_height_small: FixedHeight;
  fixed_height_still: The480_WStill;
  fixed_height: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small_still: The480_WStill;
  fixed_width_small: FixedHeight;
  fixed_width_still: The480_WStill;
  fixed_width: FixedHeight;
  hd: DownsizedSmall;
  looping: Looping;
  original_mp4: DownsizedSmall;
  original_still: The480_WStill;
  original: FixedHeight;
  preview_gif: The480_WStill;
  preview_webp: The480_WStill;
  preview: DownsizedSmall;
}

export interface The480_WStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface DownsizedSmall {
  height: string;
  mp4_size: string;
  mp4: string;
  width: string;
}

export interface FixedHeight {
  frames?: string;
  hash?: string;
  height: string;
  mp4_size?: string;
  mp4?: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
  width: string;
}

export interface Looping {
  mp4_size: string;
  mp4: string;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  description: string;
  display_name: string;
  instagram_url: string;
  is_verified: boolean;
  profile_url: string;
  username: string;
  website_url: string;
}

export type gifDataProps = Pick<GiphyResponseProps, "id" | "title" | "url">;
