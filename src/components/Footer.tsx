
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-[#eef1f5] bg-white">
      <div className="mx-auto max-w-[1216px] px-6 py-12 sm:py-14 lg:px-8 lg:py-16">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5 md:gap-8 lg:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-auto w-[120px]"
            />

            <p className="mt-4 max-w-[390px] text-[13px] leading-[19px] text-[#718096]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-5">
              <a
                href="#"
                className="text-[13px] font-medium text-[#475569] transition hover:text-[#b936b6]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[13px] font-medium text-[#475569] transition hover:text-[#b936b6]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[13px] font-medium text-[#475569] transition hover:text-[#b936b6]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.02em] text-[#111827]">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="#"
                className="text-[13px] text-[#718096] transition hover:text-[#b936b6]"
              >
                Home
              </a>

              <a
                href="#"
                className="text-[13px] text-[#718096] transition hover:text-[#b936b6]"
              >
                Technologies
              </a>

              <a
                href="#"
                className="text-[13px] text-[#718096] transition hover:text-[#b936b6]"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.02em] text-[#111827]">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="#"
                className="text-[13px] text-[#718096] transition hover:text-[#b936b6]"
              >
                About
              </a>

              <a
                href="#"
                className="text-[13px] text-[#718096] transition hover:text-[#b936b6]"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-[13px] text-[#718096] transition hover:text-[#b936b6]"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.02em] text-[#111827]">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="#"
                className="text-[13px] text-[#718096] transition hover:text-[#b936b6]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[13px] text-[#718096] transition hover:text-[#b936b6]"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-[#eef1f5] pt-6 sm:mt-12 sm:pt-8">
          <div className="flex flex-col gap-4 text-[12px] text-[#94a3b8] sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition hover:text-[#b936b6]"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition hover:text-[#b936b6]"
              >
                Terms
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

