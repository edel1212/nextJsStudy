// ✅ .evn파일에 작성한 API Key를 불러옴
const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * 👉 해당 "source"에 잡힌 경로를 "destination"로 이동 시켜줌
   * - :path* 를 사용하면 뒤에 붙은 모든 path 정보를 그대로 넘겨줌
   * */
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        // 💬 일반적으로 페이지 이동이 영구적으로 변경된 경우 permanent: true를 사용하고, 일시적인 변경의 경우 permanent: false를 사용합니다.
        permanent: false,
      },
    ];
  },
  /**
   * 👉 redirects()와는 다르게 "source"로 접근한 값을 "destination"로 변경해서 요청 함
   */
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        // 👉 중요 포인트는 ":id"로 값을 넘긴다는 것이다!! 변환해주는 destination도 똑같이!
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
