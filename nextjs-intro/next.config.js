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
};

module.exports = nextConfig;
