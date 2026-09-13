const Footer = () => {
    return (
        <footer className="bg-white text-gray-500">
            <hr className="my-10 border-gray-200" />
            <div className="w-full">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-5">

                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-purple-600 text-[10px] font-bold text-white">
                                DS
                            </div>

                            <h2 className="text-base font-bold text-gray-800">
                                Dev Stack
                            </h2>
                        </div>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="mt-4 flex gap-5 text-xs font-medium text-gray-600">
                            <a href="#" className="hover:text-gray-900">
                                GitHub
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                Twitter
                            </a>
                            <a href="#" className="hover:text-gray-900">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                            PRODUCT
                        </h3>

                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li>
                                <a href="#" className="hover:text-gray-900">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-900">
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-900">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                            COMPANY
                        </h3>

                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li>
                                <a href="#" className="hover:text-gray-900">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-900">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-900">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                            LEGAL
                        </h3>

                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li>
                                <a href="#" className="hover:text-gray-900">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-900">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col justify-between gap-4 border-t border-gray-100 pt-5 text-xs text-gray-400 sm:flex-row">
                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-700">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-gray-700">
                            Terms
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;