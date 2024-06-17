import Link from 'next/link';

const sections = {
  "FOLLOW OUR MEDIA": [
    { href: "https://discord.com", label: "Discord" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
  "HELP": [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/group-buy-pre-order-policy", label: "Group Buy / Pre-Order Policy" },
    { href: "/contact-us", label: "Contact Us" },
  ],
  "OUR POLICIES": [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/shipping-policy", label: "Shipping Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {Object.entries(sections).map(([sectionTitle, links]) => (
          <div key={sectionTitle}>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">{sectionTitle}</h2>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <div className="text-gray-700 hover:underline">{link.label}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 text-gray-500">
        © Meletrix
      </div>
    </footer>
  );
}
