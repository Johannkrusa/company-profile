import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">FOLLOW OUR MEDIA</h2>
          <ul>
            <li>
              <Link href="https://discord.com">
                <div className="text-gray-700 hover:underline">Discord</div>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com">
                <div className="text-gray-700 hover:underline">Instagram</div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">HELP</h2>
          <ul>
            <li>
              <Link href="/privacy-policy">
                <div className="text-gray-700 hover:underline">Privacy Policy</div>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service">
                <div className="text-gray-700 hover:underline">Terms of Service</div>
              </Link>
            </li>
            <li>
              <Link href="/group-buy-pre-order-policy">
                <div className="text-gray-700 hover:underline">Group Buy / Pre-Order Policy</div>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <div className="text-gray-700 hover:underline">Contact Us</div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">OUR POLICIES</h2>
          <ul>
            <li>
              <Link href="/privacy-policy">
                <div className="text-gray-700 hover:underline">Privacy Policy</div>
              </Link>
            </li>
            <li>
              <Link href="/refund-policy">
                <div className="text-gray-700 hover:underline">Refund Policy</div>
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy">
                <div className="text-gray-700 hover:underline">Shipping Policy</div>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service">
                <div className="text-gray-700 hover:underline">Terms of Service</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-500">
        © Meletrix
      </div>
    </footer>
  );
}
