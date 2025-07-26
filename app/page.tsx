"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Dice6, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BasePetsPixelLanding() {
  const [currentPet, setCurrentPet] = useState(0)
  const [isBlinking, setIsBlinking] = useState(true)
  const [glitchText, setGlitchText] = useState("BasePets")

  const pixelPets = [
    { name: "Pixel Doge", type: "Legendary", color: "#0066FF", animation: "bounce" },
    { name: "8-Bit Cat", type: "Epic", color: "#0080FF", animation: "wiggle" },
    { name: "Retro Frog", type: "Rare", color: "#0099FF", animation: "hop" },
    { name: "Cyber Shiba", type: "Common", color: "#00AAFF", animation: "glow" },
    { name: "Neon Hamster", type: "Epic", color: "#0066CC", animation: "spin" },
  ]

  const glitchTexts = ["BasePets", "B4s3P3ts", "Ba$ePet$", "BasePets", "8asePets"]

  useEffect(() => {
    const petInterval = setInterval(() => {
      setCurrentPet((prev) => (prev + 1) % pixelPets.length)
    }, 3000)

    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 1000)

    const glitchInterval = setInterval(() => {
      const randomText = glitchTexts[Math.floor(Math.random() * glitchTexts.length)]
      setGlitchText(randomText)
      setTimeout(() => setGlitchText("BasePets"), 100)
    }, 5000)

    return () => {
      clearInterval(petInterval)
      clearInterval(blinkInterval)
      clearInterval(glitchInterval)
    }
  }, [])

  const nextPet = () => {
    setCurrentPet((prev) => (prev + 1) % pixelPets.length)
  }

  const prevPet = () => {
    setCurrentPet((prev) => (prev - 1 + pixelPets.length) % pixelPets.length)
  }

  return (
    <div className="min-h-screen bg-black text-white pixel-perfect">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-perfect {
          font-family: 'Press Start 2P', monospace;
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .pixel-border {
          border: 4px solid #0066FF;
          position: relative;
        }
        
        .pixel-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: #0066FF;
          z-index: -1;
          border-radius: 0;
        }
        
        .pixel-button {
          background: linear-gradient(180deg, #333333 0%, #1a1a1a 50%, #000000 100%);
          border: 3px solid #0066FF;
          box-shadow: 
            inset 2px 2px 0px #666666,
            inset -2px -2px 0px #000000,
            0px 4px 0px #000000;
          transition: all 0.1s ease;
          text-shadow: 1px 1px 0px #000000;
        }
        
        .pixel-button:hover {
          background: linear-gradient(180deg, #444444 0%, #2a2a2a 50%, #111111 100%);
          border-color: #0080FF;
          box-shadow: 
            inset 2px 2px 0px #777777,
            inset -2px -2px 0px #111111,
            0px 4px 0px #111111;
        }
        
        .pixel-button:active {
          transform: translateY(2px);
          box-shadow: 
            inset 2px 2px 0px #000000,
            inset -2px -2px 0px #666666,
            0px 2px 0px #000000;
        }
        
        .pixel-card {
          background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
          border: 2px solid #333333;
          box-shadow: 
            inset 1px 1px 0px #333333,
            inset -1px -1px 0px #000000,
            4px 4px 0px rgba(0,0,0,0.8);
        }
        
        .neon-glow {
          text-shadow: 
            0 0 2px currentColor,
            0 0 4px currentColor,
            0 0 6px currentColor;
        }
        
        .glitch {
          animation: glitch 0.3s ease-in-out infinite alternate;
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        
        @keyframes hop {
          0%, 100% { transform: translateY(0px) scaleY(1); }
          50% { transform: translateY(-15px) scaleY(0.8); }
        }
        
        @keyframes glow {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 5px currentColor); }
          50% { filter: brightness(1.3) drop-shadow(0 0 15px currentColor); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .pet-bounce { animation: bounce 2s ease-in-out infinite; }
        .pet-wiggle { animation: wiggle 1.5s ease-in-out infinite; }
        .pet-hop { animation: hop 1.8s ease-in-out infinite; }
        .pet-glow { animation: glow 2.5s ease-in-out infinite; }
        .pet-spin { animation: spin 3s linear infinite; }
        
        .scanlines {
          position: relative;
          overflow: hidden;
        }
        
        .scanlines::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 102, 255, 0.03) 2px,
            rgba(0, 102, 255, 0.03) 4px
          );
          pointer-events: none;
          z-index: 1;
        }
        
        .crt-flicker {
          animation: flicker 0.15s infinite linear alternate;
        }
        
        @keyframes flicker {
          0% { opacity: 1; }
          100% { opacity: 0.98; }
        }
      `}</style>

      {/* Pixel Navbar */}
      <header className="border-b-4 border-blue-500 bg-black/95 backdrop-blur-sm sticky top-0 z-50 scanlines">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 pixel-border flex items-center justify-center">
                <div className="w-4 h-4 bg-white" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
              </div>
              <span className="text-lg text-blue-300 glitch">{glitchText}</span>
            </div>

            <nav className="hidden md:flex space-x-6 text-xs">
              <Link href="#home" className="text-blue-300 hover:text-white transition-colors">
                [HOME]
              </Link>
              <Link href="#pets" className="text-blue-300 hover:text-white transition-colors">
                [PETS]
              </Link>
              <Link href="#market" className="text-blue-300 hover:text-white transition-colors">
                [MARKET]
              </Link>
              <Link href="#game" className="text-blue-300 hover:text-white transition-colors">
                [GAME]
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <div className="w-6 h-6 bg-blue-400 pixel-border"></div>
              </Link>
              <Link href="#" className="text-blue-500 hover:text-blue-300 transition-colors">
                <div className="w-6 h-6 bg-blue-500 pixel-border"></div>
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-300 transition-colors">
                <div className="w-6 h-6 bg-blue-600 pixel-border"></div>
              </Link>
              <button className="pixel-button px-3 py-1 text-xs text-blue-400">[CONNECT]</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 px-4 scanlines crt-flicker">
        <div className="container mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 mb-6 pixel-border text-xs">
              ★ NOW LIVE ON BASE NETWORK ★
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-300">BASEPETS</h1>

            <div className="text-xs md:text-sm text-blue-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              &gt; COLLECT_RARE_PETS.EXE
              <br />
              &gt; TRADE_WITH_FRIENDS.BAT
              <br />
              &gt; EARN_CRYPTO_REWARDS.COM
              <br />
              <span className={`inline-block ${isBlinking ? "opacity-100" : "opacity-0"} transition-opacity`}>█</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="pixel-button px-6 py-3 text-xs text-blue-400 neon-glow">[ADOPT_PET_NOW]</button>
            <button className="pixel-button px-6 py-3 text-xs text-white neon-glow">[VISIT_MARKET]</button>
          </div>

          {/* Pixel Pet Showcase */}
          <div className="max-w-4xl mx-auto">
            <div className="pixel-card p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <button onClick={prevPet} className="pixel-button p-2 text-blue-400">
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="text-center">
                  <h3 className="text-sm text-blue-300 mb-2">&gt; FEATURED_PET.NFT</h3>
                  <div className="text-xs text-gray-400">
                    [{currentPet + 1}/{pixelPets.length}]
                  </div>
                </div>

                <button onClick={nextPet} className="pixel-button p-2 text-blue-400">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="relative">
                <div
                  className={`w-64 h-64 mx-auto pixel-border bg-gray-900 flex items-center justify-center pet-${pixelPets[currentPet].animation}`}
                >
                  <Image
                    src={`/placeholder.svg?height=200&width=200&query=8-bit pixel art ${pixelPets[currentPet].name.toLowerCase()} retro game character black white blue`}
                    alt={pixelPets[currentPet].name}
                    width={200}
                    height={200}
                    className="pixelated"
                    style={{
                      filter: `drop-shadow(0 0 10px ${pixelPets[currentPet].color})`,
                      imageRendering: "pixelated",
                    }}
                  />
                </div>

                <div className="mt-6 text-center">
                  <h4 className="text-lg mb-2 text-blue-300">{pixelPets[currentPet].name.toUpperCase()}</h4>
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 text-xs pixel-border">
                    {pixelPets[currentPet].type.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            {/* Pet Slider Dots */}
            <div className="flex justify-center space-x-2">
              {pixelPets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPet(index)}
                  className={`w-3 h-3 pixel-border transition-colors ${
                    index === currentPet ? "bg-blue-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-300">&gt; SYSTEM_FEATURES.EXE</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="pixel-card bg-gray-900/50 border-blue-500">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm text-blue-400 mb-3 neon-glow">NFT_ADOPTION.SYS</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Adopt unique 8-bit pets with rare traits. Each NFT is procedurally generated with pixel-perfect
                  artwork.
                </p>
                <button className="pixel-button px-4 py-2 text-xs text-blue-400">[ADOPT_NOW]</button>
              </CardContent>
            </Card>

            <Card className="pixel-card bg-gray-900/50 border-blue-400">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-400 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm text-blue-400 mb-3 neon-glow">MARKET_PLACE.EXE</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Trade your pixel pets with other collectors. Secure blockchain transactions on Base Network.
                </p>
                <button className="pixel-button px-4 py-2 text-xs text-blue-400">[TRADE_NOW]</button>
              </CardContent>
            </Card>

            <Card className="pixel-card bg-gray-900/50 border-blue-600">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <Dice6 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm text-blue-400 mb-3 neon-glow">PET_ROULETTE.BAT</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Spin the pixel wheel to win rare pets and PETS tokens. Retro gaming meets DeFi rewards.
                </p>
                <button className="pixel-button px-4 py-2 text-xs text-blue-400">[PLAY_GAME]</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 scanlines">
        <div className="container mx-auto">
          <div className="pixel-card p-8 max-w-4xl mx-auto">
            <h2 className="text-xl text-center mb-8 text-blue-300">&gt; NETWORK_STATUS.LOG</h2>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-300 mb-2">10,000</div>
                <div className="text-xs text-gray-400">TOTAL_PETS</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">2,847</div>
                <div className="text-xs text-gray-400">OWNERS</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500 mb-2">156.7</div>
                <div className="text-xs text-gray-400">VOLUME_ETH</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-300 mb-2">0.08</div>
                <div className="text-xs text-gray-400">FLOOR_PRICE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouncing Pet Corner */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="w-16 h-16 pet-bounce">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="Bouncing Pet"
            width={64}
            height={64}
            className="pixelated"
            style={{
              filter: "drop-shadow(0 0 10px #0066FF)",
              imageRendering: "pixelated",
            }}
          />
        </div>
      </div>

      {/* Glitch Footer */}
      <footer className="border-t-4 border-blue-500 bg-black py-12 px-4 scanlines">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="text-lg text-blue-300 glitch mb-4">BASEPETS_TERMINAL_V1.0</div>
            <div className="text-xs text-gray-400 font-mono">
              &gt; CONNECTION_ESTABLISHED
              <br />
              &gt; BLOCKCHAIN_STATUS: [ONLINE]
              <br />
              &gt; PETS_LOADED: [SUCCESS]
              <br />
              <span className={`inline-block ${isBlinking ? "opacity-100" : "opacity-0"} transition-opacity`}>█</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-sm text-blue-300 mb-4">[SOCIAL_LINKS]</h4>
              <div className="space-y-2 text-xs">
                <div className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                  &gt; TWITTER.COM/BASEPETS
                </div>
                <div className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors">
                  &gt; TELEGRAM.ORG/BASEPETS
                </div>
                <div className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors">
                  &gt; DISCORD.GG/BASEPETS
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm text-blue-400 mb-4">[SYSTEM_INFO]</h4>
              <div className="space-y-2 text-xs text-gray-400">
                <div>&gt; NETWORK: BASE_MAINNET</div>
                <div>&gt; CONTRACT: 0x...PETS</div>
                <div>&gt; VERSION: 1.0.0</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm text-blue-500 mb-4">[DOCUMENTATION]</h4>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="hover:text-blue-400 cursor-pointer transition-colors">&gt; WHITEPAPER.PDF</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">&gt; API_DOCS.HTML</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">&gt; FAQ.TXT</div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-700 mt-8 pt-8 text-center">
            <div className="text-xs text-gray-500 glitch">
              © 2024 BASEPETS.EXE - ALL_RIGHTS_RESERVED - BUILT_WITH_&lt;3_ON_BASE
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
