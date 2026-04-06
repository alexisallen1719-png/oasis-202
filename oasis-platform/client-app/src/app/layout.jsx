import './globals.css';

export const metadata = {
  title: 'Oasis | Luxury Skincare & Wellness Sanctuary',
  description: 'Relaxing tropical med spa experience. AI Skin Analysis and immersive luxury bookings.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {/* Floating Bottom Navigation for Mobile as Requested */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md glass rounded-full flex justify-between items-center px-8 py-4 z-50 shadow-2xl">
          <a href="#services" className="text-spa-deepGreen font-medium hover:text-spa-hibiscus transition-colors">Services</a>
          <a href="#booking" className="text-spa-hibiscus font-bold hover:scale-105 transition-transform">Book Now</a>
          <a href="#ai-scan" className="text-spa-deepGreen font-medium hover:text-spa-hibiscus transition-colors">AI Scan</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
