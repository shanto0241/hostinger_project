/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.flickr.com", 
            },
            {
                protocol: "https",
                hostname: "live.staticflickr.com"
            }
        ]
    }
};

export default nextConfig;
