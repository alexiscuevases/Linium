/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "4000",
			},
		],
	},
};

export default nextConfig;
