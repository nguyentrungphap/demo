import MailIcon from '@mui/icons-material/Email';
import LocationMarkerIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-5 mt-14">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Subscription Form */}
        <div className="col-span-1 lg:col-span-4">
          <h3 className="text-lg font-bold mb-4">SUBSCRIBE TO GET UPDATE ABOUT NEW PRODUCTS AND SALES</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 mr-2 flex-grow"
            />
            <button className="bg-black px-5 py-2">SUBSCRIBE</button>
          </div>
        </div>
        {/* Collections */}
        <div>
          <h4 className="font-bold mb-3">OUR COLLECTIONS</h4>
          <ul>
            {/* Add list items for collection links */}
          </ul>
        </div>
        {/* Customer Services */}
        <div>
          <h4 className="font-bold mb-3">CUSTOMER SERVICES</h4>
          <ul>
            {/* Add list items for service links */}
          </ul>
        </div>
        {/* Information */}
        <div>
          <h4 className="font-bold mb-3">INFORMATION</h4>
          <ul>
            {/* Add list items for information links */}
          </ul>
        </div>
        {/* Store Details */}
        <div>
          <h4 className="font-bold mb-3">KALA ALLINONE STORE</h4>
          <ul className="space-y-1">
            <li><LocationMarkerIcon className="inline-block h-5 w-5 mr-1" /> Battlefield, Suite C Springfield, MO 65807</li>
            <li><PhoneIcon className="inline-block h-5 w-5 mr-1" /> 111-222-3333</li>
            <li><MailIcon className="inline-block h-5 w-5 mr-1" /> support@kalathemes.com</li>
            {/* Social Media Icons */}
            <li className="flex space-x-4 mt-2">
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="flex justify-between items-center border-t border-gray-700 pt-5 mt-5">
        <p className="text-sm">COPYRIGHT © 2024 KALA 7.0 VERSION | FLEXIBLE SECTIONS BUILDER MOBILE OPTIMIZED</p>
        <button>
          {/* <ChevronUpIcon className="h-5 w-5 cursor-pointer" /> */}
          {/* Add scroll to top functionality */}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
