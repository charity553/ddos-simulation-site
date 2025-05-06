const partners = [
    { name: "JHUB Africa", image: "/assets/jhubafrica_logo.jpg", url: "https://jhubafrica.com/" },
    { name: "JKUAT", image: "/assets/jkuat.jpg", url: "https://www.jkuat.ac.ke/" },
    { name: "SKIES-PROGRAM", image: "/assets/KIEPSKIES.jpg", url: "https://kiep-skies.co.ke/" },
  ];
  
  export default function Footer() {
    return (
      <footer className="bg-gray-100 p-6 border-t">
        <h4 className="text-center font-semibold text-lg mb-4">Our Partners</h4>
        <div className="flex justify-center gap-8 items-center flex-wrap">
          {partners.map((partner) => (
            <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer">
              <img
                src={partner.image}
                alt={partner.name}
                className="h-12 hover:opacity-80 transition"
              />
            </a>
          ))}
        </div>
        <p className="text-center text-sm mt-4 text-gray-500">© 2025 DDoS Simulation Project</p>
      </footer>
    );
  }
  