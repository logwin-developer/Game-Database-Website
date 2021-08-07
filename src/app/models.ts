// export interface Game {
//   background_image: string;
//   name: string;
//   released: string;
//   metacritic_url: string;
//   website: string;
//   description: string;
//   metacritic: number;
//   genres: Array<Genre>;
//   parent_platforms: Array<ParentPlatform>;
//   publishers: Array<Publishers>;
//   rating: Array<Rating>;
//   screenshots: Array<Screenshots>;
//   trailers: Array<Trailer>;
// }

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface APIResponse<T> {
  results: Array<T>;
}

export interface specificGame {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: Array<Requirements>;
  screenshots: Array<Photo>;
}

interface Requirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

interface Photo {
  id: number;
  image: string;
}

// interface Genre {
//   name: string;
// }

// interface ParentPlatform {
//   platform: {
//     name: string;
//   };
// }

// interface Publishers {
//   name: string;
// }

// interface Rating {
//   id: number;
//   count: number;
//   title: string;
// }

// interface Screenshots {
//   image: string;
// }

// interface Trailer {
//   data: {
//     max: string;
//   };
// }
