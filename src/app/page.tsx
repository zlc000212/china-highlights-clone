import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Star, Award, Users, Clock, Eye, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://ext.same-assets.com/1468024504/3102230825.png"
                alt="China Highlights"
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button className="text-gray-700 hover:text-red-600 font-medium">CHINA TOURS</button>
              <button className="text-gray-700 hover:text-red-600 font-medium">DESTINATIONS</button>
              <button className="text-gray-700 hover:text-red-600 font-medium">TRAVEL GUIDE</button>
              <button className="text-gray-700 hover:text-red-600 font-medium">CULTURE</button>
              <button className="text-gray-700 hover:text-red-600 font-medium">TRAINS</button>
              <button className="text-gray-700 hover:text-red-600 font-medium">DAY TOURS</button>
              <button className="text-gray-700 hover:text-red-600 font-medium">ABOUT US</button>
            </nav>

            {/* Search and Contact */}
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-600 hover:text-red-600">Contact us</button>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search China Highlights"
                  className="w-64 pr-10 border-gray-300"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: 'url(https://ext.same-assets.com/1468024504/2201032898.webp)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Personalized
              <br />
              Discovery
            </h1>
            <p className="text-xl mb-6">
              Authentic China Travel with Award-Winning
              <br />
              and Best-Rated Private Tours
            </p>
            <div className="flex items-center space-x-4">
              <img src="https://ext.same-assets.com/1468024504/2214021320.png" alt="Awards" className="h-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Description */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            China Highlights, Discovery Your Way!
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed mb-8">
            <p>
              Discover China with the <strong>award-winning</strong> and <strong>best-rated</strong> tour company for <strong>personalized travel in China</strong>.
              Honored as <strong>China's Leading Tour Operator</strong> by the <strong>World Travel Awards</strong>, we boast <strong>10,000+ reviews</strong> and
              a remarkable <strong>98.8% 5-star rating</strong>. Our expertise in customizing personalized China explorations is backed by our company-managed
              local services across China. Explore and kickstart your personalized travel experience with just a click!
            </p>
          </div>

          {/* Company Awards */}
          <img src="https://ext.same-assets.com/1468024504/1644357088.webp" alt="Company Awards" className="mb-8" />

          {/* CTA Button */}
          <div className="bg-red-600 text-white inline-flex items-center px-6 py-3 rounded-lg hover:bg-red-700 transition-colors cursor-pointer">
            <Heart className="mr-2 h-5 w-5" />
            Create my trip
          </div>
        </section>

        {/* Visa-Free Access */}
        <section className="mb-16 border-2 border-dashed border-gray-300 p-8 rounded-lg relative">
          <div className="absolute -top-4 left-8 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
            WHAT'S NEW!
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Visa-Free Access to China</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0" />
              If you are from the US, the UK, Canada, and 52 other countries, you can enjoy a 10-day visa-free transit in China. Contact us to plan the perfect visa-free itinerary to suit your needs.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0" />
              If you are from Italy, Australia, Spain, Germany, France, New Zealand, Belgium, the UAE, and 29 other countries, you can visit China visa-free for up to 30 days until December 31st, 2025.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0" />
              If you are from Brazil, Argentina, Chile, Peru, and Uruguay, you can visit China visa-free for up to 30 days from June 1st, 2025, to May 31st, 2026.
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0" />
              If you are from Saudi Arabia, Oman, Kuwait, and Bahrain, you can visit China visa-free for up to 30 days from June 9th, 2025, to June 8th, 2026.
            </li>
          </ul>
        </section>

        {/* Top China Tours */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Top China Tours</h2>
          <p className="text-gray-700 mb-8">
            The tours below will give you an idea of what's possible if you travel with us. Our tours are always designed to help you
            <strong> experience authentic China</strong>. Feel free to customize any tour to incorporate your preferred destinations, interests and schedule.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                image: "https://ext.same-assets.com/1468024504/647670242.webp",
                title: "11-Day China Classic Tour",
                description: "Beijing, Xi'an, Guilin, and Shanghai"
              },
              {
                image: "https://ext.same-assets.com/1468024504/3974814036.webp",
                title: "14-Day China Natural Wonders Discovery",
                description: "Beijing, Xi'an, Zhangjiajie, Guilin, and Shanghai"
              },
              {
                image: "https://ext.same-assets.com/1468024504/334874818.webp",
                title: "3-Week Must-See Places China Tour Including Holy Tibet",
                description: "Beijing, Xi'an, Lhasa, Chengdu, Zhangjiajie, Guilin, and Shanghai"
              },
              {
                image: "https://ext.same-assets.com/1468024504/1813096156.webp",
                title: "21-Day China Tour with Silk Road",
                description: "Beijing, Xi'an, Zhangye, Dunhuang, Turpan, Urumqi, Kashgar, Chengdu, Zhangjiajie, and Shanghai"
              }
            ].map((tour) => (
              <Card key={tour.title} className="overflow-hidden">
                <div className="relative h-48">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                    VIEW MORE
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              MORE CHINA TOURS
            </Button>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="mb-16 text-center">
          <p className="text-gray-700 mb-8">
            Discover real reviews of Highlights Travel Family's best-rated service across trusted platforms.
          </p>

          <div className="flex justify-center mb-8">
            <img src="https://ext.same-assets.com/1468024504/3297897195.png" alt="TripAdvisor Certificate" className="h-24" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Great Trip with Tom",
                content: "Tom was a Perfect Guide and made my Trip a Great experience! Driver is also great. I visited a lot of good places. I enjoyed Beijing a lot",
                author: "May 2025, Sybil",
                rating: 5
              },
              {
                title: "Visita a China, una experiencia histórica, moderna y gastronómica única!",
                content: "Una experiencia inolvidable. La organización del tour fue excelente, y lo que realmente marcó la diferencia fue NUESTRA GUÍA LIDIA...",
                author: "May 2025, natalia c",
                rating: 5
              },
              {
                title: "short trip to peking",
                content: "We did have three days in Beijing with Jiang. The organisation, driver and guiding was really great. We have been a group of 2 (couple)...",
                author: "May 2025, Matthias",
                rating: 5
              }
            ].map((review) => (
              <Card key={review.title} className="text-left">
                <CardContent className="p-6">
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={`star-${review.title}-${i}`} className="h-4 w-4 fill-green-500 text-green-500" />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{review.content}</p>
                  <p className="text-gray-500 text-xs">{review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Most Popular China Tour Destinations</h2>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { name: "Beijing", image: "https://ext.same-assets.com/1468024504/3350297971.webp" },
              { name: "Xi'an", image: "https://ext.same-assets.com/1468024504/1468737725.webp" },
              { name: "Guilin", image: "https://ext.same-assets.com/1468024504/2371170294.webp" },
              { name: "Shanghai", image: "https://ext.same-assets.com/1468024504/2804041830.webp" },
              { name: "Zhangjiajie", image: "https://ext.same-assets.com/1468024504/2358527132.webp" },
              { name: "Chengdu", image: "https://ext.same-assets.com/1468024504/2330585003.webp" },
              { name: "Silk Road", image: "https://ext.same-assets.com/1468024504/3456043610.webp" },
              { name: "Tibet", image: "https://ext.same-assets.com/1468024504/2549780317.webp" }
            ].map((destination) => (
              <div key={destination.name} className="relative group cursor-pointer">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              SEE ALL CHINA DESTINATIONS
            </Button>
          </div>
        </section>

        {/* How to Plan */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Plan a Trip to China?</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                image: "https://ext.same-assets.com/1468024504/1412335646.webp",
                title: "How to Plan Your Family Trip to China"
              },
              {
                image: "https://ext.same-assets.com/1468024504/346712668.webp",
                title: "How to Plan a First Trip to China"
              },
              {
                image: "https://ext.same-assets.com/1468024504/226668553.webp",
                title: "Top 30 Most Beautiful Places in China"
              },
              {
                image: "https://ext.same-assets.com/1468024504/3085924058.webp",
                title: "How to Plan a Panda Tour"
              }
            ].map((guide) => (
              <div key={guide.title} className="relative group cursor-pointer">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold">{guide.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              GET MORE UPDATED TRAVEL TIPS
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-800 text-white text-center py-12 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">
            Start planning your tailor-made tour with 1-1 help from our travel advisors.
          </h2>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            CREATE YOUR TRIP
          </Button>
        </section>
      </main>

      {/* Newsletter Section */}
      <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: 'url(https://ext.same-assets.com/1468024504/902388688.webp)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Sign up to Our Newsletter</h2>
            <p className="text-xl mb-8">
              Be the first to receive exciting updates, exclusive promotions, and valuable travel tips from our team of experts.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              CLICK TO SIGN UP
            </Button>
          </div>
        </div>
      </section>

      {/* Why China Highlights */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why China Highlights</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-12 w-12 text-gray-600" />,
                title: "Customize Your Tour",
                features: [
                  "Travel Advisors Rooted in China",
                  "Instant Response, No More Waits!",
                  "Direct Connections, Supreme Values"
                ]
              },
              {
                icon: <Award className="h-12 w-12 text-gray-600" />,
                title: "Maximize Your Flexibility",
                features: [
                  "Your own personal guide and ride.",
                  "Explore at your own pace.",
                  "Unparalleled flexibility, impossible on a group tour."
                ]
              },
              {
                icon: <Heart className="h-12 w-12 text-gray-600" />,
                title: "Ensure Your Satisfaction",
                features: [
                  "The Top 20% nationwide guides at your service.",
                  "20% more space on your group's transportation.",
                  "24/7 emergency support."
                ]
              },
              {
                icon: <Eye className="h-12 w-12 text-gray-600" />,
                title: "Live Your China Story",
                features: [
                  "Authentic local culture and lifestyles.",
                  "Understand the culture by living it.",
                  "Uncover fascinating histories and witness New China."
                ]
              }
            ].map((feature) => (
              <Card key={feature.title} className="bg-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {feature.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Where Can We Take You Today?</h3>
              <ul className="space-y-2 text-sm">
                <li>Southeast Asia</li>
                <li>Japan, South Korea</li>
                <li>India, Nepal, Bhutan, and Sri lanka</li>
                <li>Central Asia</li>
                <li>Europe</li>
                <li>Middle East</li>
                <li>African Safari</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>About us</li>
                <li>Travel Agents</li>
                <li>Reviews</li>
                <li>Contact us</li>
                <li>Loyalty & Referral Program</li>
                <li>Partner</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Language</h3>
              <ul className="space-y-2 text-sm">
                <li>Deutsch</li>
                <li>Français</li>
                <li>Español</li>
                <li>Italiano</li>
                <li>Русский</li>
                <li>日本語</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <img src="https://ext.same-assets.com/1468024504/1194369989.png" alt="China Highlights" className="h-8 mr-4" />
                <div className="text-sm">
                  <p>China Highlights International</p>
                  <p>Travel Service Co., LTD</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                © 1998-2025 China Highlights — Discovery Your Way!
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-4">Address: Building 6, Chuangyi Business Park, 70 Qilidian Road, Guilin, Guangxi, 541004, China</p>
              <div className="flex flex-wrap items-center justify-center space-x-4">
                <img src="https://ext.same-assets.com/1468024504/1361079284.png" alt="Featured on" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
