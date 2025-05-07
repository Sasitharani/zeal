import React from 'react';
import WebsitePreview from './WebsitePreview';
import WhatsAppButton from './WhatsAppButton';

const Portfolio = () => {
    const websites = [
      { name: "IITI Online", url: "https://iiti.in", screenshot: "/img/screenshots/iiti.png" },
      { name: "KSR Electricals", url: "https://ksrelectricals.in", screenshot: "/img/screenshots/KSr.jpg" },
      { name: "SGM Modern Bricks", url: "https://sgmmodernbricks.com", screenshot: "/img/screenshots/sgmmodernbricks.png" },
      { name: "Insphile", url: "https://insphile.in", screenshot: "/img/screenshots/insphile.png" },
      { name: "Contests4All", url: "https://contests4all.com", screenshot: "/img/screenshots/contests4all.png" },
    ];
  
    return (
      <section className="relative py-16 bg-gradient-to-b from-slate-50 to-white flex justify-center items-center">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-2">
              Our Portfolio
            </h2>
            <div className="w-12 h-1 bg-cyan-600 rounded mb-4"></div>
            <p className="max-w-[700px] text-slate-600">
              Check out these websites we've created. Hover over each preview to see the site in action.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websites.map((site, index) => (
              <WebsitePreview
                key={index}
                name={site.name}
                url={site.url}
                screenshot={site.screenshot}
                index={index}
              />
            ))}
          </div>
        </div>
        <WhatsAppButton />
      </section>
    );
  };
  
  export default Portfolio;
