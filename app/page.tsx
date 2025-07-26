"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Dice6, ArrowLeft, ArrowRight, Calendar, Coins, Users, Target, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BasePetsPixelLanding() {
  const [currentPet, setCurrentPet] = useState(0)
  const [isBlinking, setIsBlinking] = useState(true)
  const [glitchText, setGlitchText] = useState("BasePets")

  const pixelPets = [
    {
      name: "DJ Pup",
      type: "Legendary",
      color: "#0066FF",
      animation: "bounce",
      image: "/images/pets/dj-pup.png",
      description: "Legendary DJ with blue headphones, ready to drop the hottest beats in the metaverse",
    },
    {
      name: "Bow Cat",
      type: "Epic",
      color: "#0080FF",
      animation: "wiggle",
      image: "/images/pets/bow-cat.png",
      description: "Elegant feline with a stylish pink bow tie, perfect for formal NFT events",
    },
    {
      name: "Music Dog",
      type: "Rare",
      color: "#0099FF",
      animation: "hop",
      image: "/images/pets/music-dog.png",
      description: "Musical pup with headphones and floating notes, always vibing to the rhythm",
    },
    {
      name: "Wizard Pup",
      type: "Epic",
      color: "#00AAFF",
      animation: "glow",
      image: "/images/pets/wizard-pup.png",
      description: "Mystical wizard dog with magical blue hat and ancient crypto spells",
    },
    {
      name: "Classic Dog",
      type: "Common",
      color: "#0066CC",
      animation: "spin",
      image: "/images/pets/classic-dog.png",
      description: "The original BasePet - simple, pure, and full of retro gaming charm",
    },
  ]

  const roadmapPhases = [
    {
      phase: "Q1 2025",
      title: "GENESIS_LAUNCH.EXE",
      status: "completed",
      items: [
        "Smart Contract Deployment",
        "10,000 Genesis Pets Mint",
        "Community Building",
        "Base Network Integration",
      ],
    },
    {
      phase: "Q2 2025",
      title: "MARKETPLACE_BETA.BAT",
      status: "current",
      items: ["P2P Trading Platform", "Staking Mechanism", "Pet Roulette Game", "Mobile App Beta"],
    },
    {
      phase: "Q3 2025",
      title: "BREEDING_SYSTEM.SYS",
      status: "upcoming",
      items: ["Pet Breeding Feature", "Rare Trait Generation", "DAO Governance Launch", "Cross-chain Bridge"],
    },
    {
      phase: "Q4 2025",
      title: "METAVERSE_EXPANSION.COM",
      status: "upcoming",
      items: ["3D Pet Avatars", "Virtual Pet World", "Play-to-Earn Games", "Partnership Integrations"],
    },
  ]

  const tokenomics = [
    { category: "Liquidity Pool", percentage: 40, amount: "400M PETS", color: "#0066FF" },
    { category: "Community Rewards", percentage: 25, amount: "250M PETS", color: "#0080FF" },
    { category: "Development Team", percentage: 15, amount: "150M PETS", color: "#0099FF" },
    { category: "Marketing", percentage: 10, amount: "100M PETS", color: "#00AAFF" },
    { category: "Partnerships", percentage: 5, amount: "50M PETS", color: "#0066CC" },
    { category: "Reserve Fund", percentage: 5, amount: "50M PETS", color: "#004499" },
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
          line-height: 1.6;
        }
        
        .text-content {
          line-height: 1.8;
          letter-spacing: 0.5px;
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

        .progress-bar {
          background: linear-gradient(90deg, #0066FF 0%, #333333 100%);
          height: 8px;
          border: 2px solid #0066FF;
        }

        .pet-showcase {
          background: radial-gradient(circle at center, rgba(0, 102, 255, 0.1) 0%, transparent 70%);
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
              <Link href="#about" className="text-blue-300 hover:text-white transition-colors">
                [ABOUT]
              </Link>
              <Link href="#pets" className="text-blue-300 hover:text-white transition-colors">
                [PETS]
              </Link>
              <Link href="#roadmap" className="text-blue-300 hover:text-white transition-colors">
                [ROADMAP]
              </Link>
              <Link href="#tokenomics" className="text-blue-300 hover:text-white transition-colors">
                [TOKENOMICS]
              </Link>
              <Link href="#team" className="text-blue-300 hover:text-white transition-colors">
                [TEAM]
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
                  className={`w-64 h-64 mx-auto pixel-border bg-gray-900 flex items-center justify-center pet-showcase pet-${pixelPets[currentPet].animation}`}
                >
                  <Image
                    src={pixelPets[currentPet].image || "/placeholder.svg"}
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
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 text-xs pixel-border mb-3">
                    {pixelPets[currentPet].type.toUpperCase()}
                  </div>
                  <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                    {pixelPets[currentPet].description}
                  </p>
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

      {/* Pet Gallery Section */}
      <section className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-300">&gt; PET_COLLECTION.DAT</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {pixelPets.map((pet, index) => (
              <div
                key={index}
                className={`pixel-card p-4 text-center bg-gray-900/50 border-2 cursor-pointer transition-all hover:scale-105 ${
                  index === currentPet ? "border-blue-400" : "border-gray-600"
                }`}
                onClick={() => setCurrentPet(index)}
              >
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src={pet.image || "/placeholder.svg"}
                    alt={pet.name}
                    width={64}
                    height={64}
                    className="pixelated"
                    style={{
                      filter: `drop-shadow(0 0 5px ${pet.color})`,
                      imageRendering: "pixelated",
                    }}
                  />
                </div>
                <h4 className="text-xs text-blue-300 mb-1">{pet.name.toUpperCase()}</h4>
                <div className="text-xs text-gray-400">{pet.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-300">&gt; ABOUT_BASEPETS.TXT</h2>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Main Description */}
            <div className="pixel-card p-8">
              <h3 className="text-xl text-blue-400 mb-6 neon-glow flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                PROJECT_OVERVIEW.DAT
              </h3>

              <div className="space-y-4 text-xs text-gray-300 leading-relaxed">
                <p className="text-content">
                  BasePets is the first pixel art animal NFT collection on Base Network that combines retro gaming
                  nostalgia with modern blockchain technology. Each pet has unique characteristics and can be used
                  within an integrated gaming ecosystem.
                </p>

                <p className="text-content">
                  This project was born from a love of classic pixel art and crypto meme culture. We believe that NFTs
                  should be more than just images - they should have real utility and provide an enjoyable experience
                  for their owners.
                </p>

                <p className="text-content">
                  By leveraging the speed and low costs of Base Network, BasePets offers a seamless trading and gaming
                  experience for everyone, from beginner collectors to experienced traders.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-gray-700">
                <h4 className="text-sm text-blue-400 mb-3">CORE_VALUES.SYS</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-400 text-xs">•</span>
                    <span className="text-xs text-gray-300">Community First</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-400 text-xs">•</span>
                    <span className="text-xs text-gray-300">Pixel Art Excellence</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-400 text-xs">•</span>
                    <span className="text-xs text-gray-300">Gaming Integration</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-400 text-xs">•</span>
                    <span className="text-xs text-gray-300">Sustainable Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-8">
              <div className="pixel-card p-6">
                <h3 className="text-lg text-blue-400 mb-4 neon-glow flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  MISSION.EXE
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed text-content">
                  To create an accessible, fun, and sustainable NFT gaming ecosystem on Base Network. We want to prove
                  that NFTs can be more than just collectibles - they can be gateways to immersive and rewarding gaming
                  experiences.
                </p>
              </div>

              <div className="pixel-card p-6">
                <h3 className="text-lg text-blue-400 mb-4 neon-glow flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  VISION.BAT
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed text-content">
                  To become the leading NFT gaming platform on Base Network that connects retro gaming nostalgia with
                  Web3 innovation. We envision a future where every gamer has digital pets they can develop, trade, and
                  use across multiple games.
                </p>
              </div>

              <div className="pixel-card p-6">
                <h3 className="text-lg text-blue-400 mb-4 neon-glow flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  WHY_BASE.COM
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 pixel-border flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-xs text-blue-400 mb-1">Lightning Fast</h4>
                      <p className="text-xs text-gray-300 text-content">Instant transactions without delays</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-400 pixel-border flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">💰</span>
                    </div>
                    <div>
                      <h4 className="text-xs text-blue-400 mb-1">Low Cost</h4>
                      <p className="text-xs text-gray-300 text-content">Minimal gas fees for everyone</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 pixel-border flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">🔒</span>
                    </div>
                    <div>
                      <h4 className="text-xs text-blue-400 mb-1">Secure</h4>
                      <p className="text-xs text-gray-300 text-content">Enterprise-grade security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-16">
            <h3 className="text-xl text-center mb-8 text-blue-300">&gt; KEY_FEATURES.LOG</h3>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="pixel-card p-6 text-center bg-gray-900/50 border-blue-500">
                <div className="w-12 h-12 bg-blue-500 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-lg">🎮</span>
                </div>
                <h4 className="text-sm text-blue-400 mb-2">RETRO_GAMING</h4>
                <p className="text-xs text-gray-300 text-content">
                  Authentic 8-bit pixel art with classic gaming nostalgia
                </p>
              </div>

              <div className="pixel-card p-6 text-center bg-gray-900/50 border-blue-400">
                <div className="w-12 h-12 bg-blue-400 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <h4 className="text-sm text-blue-400 mb-2">BASE_NETWORK</h4>
                <p className="text-xs text-gray-300 text-content">Fast & cheap transactions on leading blockchain</p>
              </div>

              <div className="pixel-card p-6 text-center bg-gray-900/50 border-blue-600">
                <div className="w-12 h-12 bg-blue-600 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-lg">🎲</span>
                </div>
                <h4 className="text-sm text-blue-400 mb-2">PLAY_TO_EARN</h4>
                <p className="text-xs text-gray-300 text-content">Gaming mechanics with real rewards and utility</p>
              </div>

              <div className="pixel-card p-6 text-center bg-gray-900/50 border-blue-300">
                <div className="w-12 h-12 bg-blue-300 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-lg">👥</span>
                </div>
                <h4 className="text-sm text-blue-400 mb-2">COMMUNITY</h4>
                <p className="text-xs text-gray-300 text-content">Strong community with shared passion for pixel art</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="pets" className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-300">&gt; SYSTEM_FEATURES.EXE</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="pixel-card bg-gray-900/50 border-blue-500">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm text-blue-400 mb-3 neon-glow">NFT_ADOPTION.SYS</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4 text-content">
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
                <p className="text-xs text-gray-300 leading-relaxed mb-4 text-content">
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
                <p className="text-xs text-gray-300 leading-relaxed mb-4 text-content">
                  Spin the pixel wheel to win rare pets and PETS tokens. Retro gaming meets DeFi rewards.
                </p>
                <button className="pixel-button px-4 py-2 text-xs text-blue-400">[PLAY_GAME]</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 px-4 scanlines">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-300">
            &gt; DEVELOPMENT_ROADMAP.LOG
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapPhases.map((phase, index) => (
                <Card
                  key={index}
                  className={`pixel-card bg-gray-900/50 ${
                    phase.status === "completed"
                      ? "border-blue-600"
                      : phase.status === "current"
                        ? "border-blue-400"
                        : "border-gray-600"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-6 h-6 text-blue-400 mr-2" />
                      <span className="text-xs text-blue-300">{phase.phase}</span>
                    </div>

                    <h3 className="text-sm text-blue-400 mb-4 neon-glow">{phase.title}</h3>

                    <div
                      className={`text-xs px-2 py-1 mb-4 pixel-border inline-block ${
                        phase.status === "completed"
                          ? "bg-blue-600 text-white"
                          : phase.status === "current"
                            ? "bg-blue-400 text-black"
                            : "bg-gray-600 text-gray-300"
                      }`}
                    >
                      {phase.status.toUpperCase()}
                    </div>

                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-xs text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-16 px-4 bg-gray-900/20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-300">&gt; TOKEN_ECONOMICS.SYS</h2>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Token Distribution */}
            <div className="pixel-card p-8">
              <h3 className="text-xl text-blue-400 mb-6 neon-glow flex items-center">
                <Coins className="w-6 h-6 mr-2" />
                TOKEN_DISTRIBUTION.DAT
              </h3>

              <div className="space-y-4">
                {tokenomics.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-300">{item.category}</span>
                      <span className="text-xs text-blue-400">{item.percentage}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="h-full transition-all duration-1000"
                        style={{
                          width: `${item.percentage}%`,
                          background: item.color,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400">{item.amount}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t-2 border-gray-700">
                <div className="text-center">
                  <div className="text-lg text-blue-300 mb-2">TOTAL_SUPPLY</div>
                  <div className="text-2xl font-bold text-white">1,000,000,000 PETS</div>
                </div>
              </div>
            </div>

            {/* Token Utility */}
            <div className="pixel-card p-8">
              <h3 className="text-xl text-blue-400 mb-6 neon-glow flex items-center">
                <Target className="w-6 h-6 mr-2" />
                TOKEN_UTILITY.EXE
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 pixel-border flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-400 mb-1">Pet Adoption</h4>
                    <p className="text-xs text-gray-300 text-content">
                      Use PETS tokens to adopt new NFT pets and unlock rare traits
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-400 pixel-border flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-400 mb-1">Staking Rewards</h4>
                    <p className="text-xs text-gray-300 text-content">
                      Stake PETS tokens to earn passive income and exclusive benefits
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 pixel-border flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-400 mb-1">DAO Governance</h4>
                    <p className="text-xs text-gray-300 text-content">
                      Vote on project decisions and shape the future of BasePets
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-300 pixel-border flex items-center justify-center flex-shrink-0">
                    <Dice6 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-400 mb-1">Gaming Currency</h4>
                    <p className="text-xs text-gray-300 text-content">
                      Play Pet Roulette and other games using PETS tokens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 scanlines">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-300">&gt; CORE_TEAM.DAT</h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="pixel-card bg-gray-900/50 border-blue-500">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-blue-500 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Lead Developer"
                    width={60}
                    height={60}
                    className="pixelated"
                  />
                </div>
                <h3 className="text-sm text-blue-400 mb-2 neon-glow">LEAD_DEVELOPER</h3>
                <p className="text-xs text-gray-300 mb-3">Alex Chen</p>
                <p className="text-xs text-gray-400 leading-relaxed text-content">
                  10+ years blockchain development. Former Ethereum core contributor.
                </p>
              </CardContent>
            </Card>

            <Card className="pixel-card bg-gray-900/50 border-blue-400">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-blue-400 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Art Director"
                    width={60}
                    height={60}
                    className="pixelated"
                  />
                </div>
                <h3 className="text-sm text-blue-400 mb-2 neon-glow">ART_DIRECTOR</h3>
                <p className="text-xs text-gray-300 mb-3">Maya Rodriguez</p>
                <p className="text-xs text-gray-400 leading-relaxed text-content">
                  Award-winning pixel artist. Created art for major gaming studios.
                </p>
              </CardContent>
            </Card>

            <Card className="pixel-card bg-gray-900/50 border-blue-600">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 pixel-border mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Community Manager"
                    width={60}
                    height={60}
                    className="pixelated"
                  />
                </div>
                <h3 className="text-sm text-blue-400 mb-2 neon-glow">COMMUNITY_LEAD</h3>
                <p className="text-xs text-gray-300 mb-3">Jordan Kim</p>
                <p className="text-xs text-gray-400 leading-relaxed text-content">
                  Built communities for top NFT projects. Expert in Web3 marketing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bouncing Pet Corner */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="w-16 h-16 pet-bounce">
          <Image
            src="/images/pets/classic-dog.png"
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

          <div className="grid md:grid-cols-4 gap-8 text-center">
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

            <div>
              <h4 className="text-sm text-blue-600 mb-4">[SECURITY]</h4>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="hover:text-blue-400 cursor-pointer transition-colors">&gt; AUDIT_REPORT.PDF</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">&gt; BUG_BOUNTY.HTML</div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">&gt; SECURITY.TXT</div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-700 mt-8 pt-8 text-center">
            <div className="text-xs text-gray-500 glitch">
              © 2025 BASEPETS.EXE - ALL_RIGHTS_RESERVED - BUILT_WITH_&lt;3_ON_BASE
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
