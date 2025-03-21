import React from 'react';

const Portfolio = () => {
    const websites = [
        { name: "iiti.in", url: "https://iiti.in", screenshot: "/screenshots/iiti.png" },
        { name: "ksrelectricals.in", url: "https://ksrelectricals.in", screenshot: "/screenshots/ksrelectricals.png" },
        { name: "sgmmodernbricks.com", url: "https://sgmmodernbricks.com", screenshot: "/screenshots/sgmmodernbricks.png" },
        { name: "insphile.in", url: "https://insphile.in", screenshot: "/screenshots/insphile.png" },
        { name: "contests4all.com", url: "https://contests4all.com", screenshot: "/screenshots/contests4all.png" },
    ];

    return (
        <div className="my-12 mx-36 flex flex-col items-center min-h-screen border-2 border-cyan-900 rounded-lg text-cyan-900">
            <h2 className="text-2xl font-bold mb-6">Our Portfolio</h2>
            <div className="grid grid-cols-2 gap-6 w-full px-6">
                {websites.map((site, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={site.screenshot}
                            alt={site.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <a
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                {site.name}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
