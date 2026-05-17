const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm font-semibold text-gray-800">
                    JG <span className="text-blue-600">University</span> — Ahmedabad, Gujarat
                </p>
                <nav className="flex gap-6 text-sm text-gray-500">
                    {['Programs', 'Admissions', 'Faculty', 'Campus', 'Contact'].map(link => (
                        <a key={link} href="#" className="hover:text-gray-800 transition">{link}</a>
                    ))}
                </nav>
            </div>
            <div className="border-t border-gray-100 py-3 text-center text-xs text-gray-400">
                © 2026 JG University. All rights reserved. Sponsored by ASIA Charitable Trust.
            </div>
        </footer>
    )
}

export default Footer