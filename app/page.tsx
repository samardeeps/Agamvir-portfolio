"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Play, Star, Award, Camera, Film, Instagram, Youtube, Music, Facebook, Mail, Phone, X, ChevronLeft, ChevronRight, ImageIcon, Video } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentMedia, setCurrentMedia] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Auto-show portfolio after animation completes
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const portfolioSections = [
    { id: "home", label: "Home", icon: Star },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "movies", label: "Movies", icon: Film },
    { id: "ads", label: "Advertisements", icon: Camera },
    { id: "awards", label: "Awards", icon: Award },
    { id: "social", label: "Connect", icon: Instagram },
  ]

  const movies = [
    { title: "MEHAR", year: "2025", role: "Lead", poster: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753985435/Mehar1_mfainq.png" },
    { title: "MAJHAIL", year: "2025", role: "Supporting", poster: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753985463/majhail_u01qa4.png" },
    { title: "Rumi Ki Sharafat", year: "Soon..", role: "Supporting", poster: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753985888/rumi_eusw6u.png" },
  ]

  const advertisements = [
    {
      brand: "Y Play Z",
      year: "2025",
      type: "video",
      thumbnail: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753998672/b5471df8-28c0-4f6c-beea-4addf51e34d6.png",
      src: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1753999037/For_y.play.z_Styling_and_Direction_ayushi_agarwaaal_khyati_tyagi_Photographer_amitanand_r_1_d7f0gr.mp4",
      alt: "Y Play Z Campaign",
    },
    {
      brand: "Mother Dairy",
      year: "2024",
      type: "video",
      thumbnail: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753985415/motherdairy_tsixdl.jpg",
      src: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1753999237/Mother_Dairy_Maa_Jaisi_coolness___25_sec_mrmlc4.mp4",
      alt: "Mother Dairy TV Commercial",
    },
    {
      brand: "IDFC First Bank",
      year: "2024",
      type: "video",
      thumbnail: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753966002/idfc_uh4vyf.png",
      src: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1753966303/This_Children_s_Day_don_t_be_fooled_by_scammers_Stay_sharp_bank_safe._ow15ku.mp4",
      alt: "IDFC First Bank TV Commercial",
    },
    {
      brand: "Election Commission TVC",
      year: "2024",
      type: "image",
      thumbnail: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753988263/89d3178a-b5fc-46ee-bbfe-36f21c63ae7e.png",
      src: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1754000089/Election_commission_TVC_csnkv1.mp4",
      alt: "Election Commission Campaign Ad",
    },
    {
      brand: "Tata Communications Limited",
      year: "2023",
      type: "image",
      thumbnail: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753989263/8ed97ca0-66c9-48d6-a110-cc2e6aceb558.png",
      src: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753989263/8ed97ca0-66c9-48d6-a110-cc2e6aceb558.png",
      alt: "Tata Communications TV Commercial",
    },
  ]

  const awards = [
    { title: "Best Child Actor", event: "Young Artists Awards", year: "2023" },
    { title: "Rising Star", event: "Kids Choice Awards", year: "2024" },
    { title: "Outstanding Performance", event: "Children's Film Festival", year: "2023" },
  ]

  const socialMedia = [
    {
      platform: "Instagram",
      handle: "@agam.vir18",
      followers: "11.6K",
      icon: Instagram,
      url: "https://www.instagram.com/agam.vir18?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      platform: "YouTube",
      handle: "Agamvir Singh",
      icon: Youtube,
      url: "https://youtube.com/@agamvirsingh1819?si=QpBCGjafRSVw_7h1",
    },
    {
      platform: "Facebook",
      handle: "Agamvir Singh Official",
      followers: "1.7K",
      icon: Facebook,
      url: "https://www.facebook.com/agamvir.singh.395",
    },
  ]

  const galleryMedia = [
    {
      type: "video",
      src: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1753993984/ap_Dhillon_x_Suresh_Raina_play_cricket_with_kids_nw1k3a.mp4",
      poster: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753992494/ffbeafd3-746b-41c6-9fe2-52de9ce3f988.png",
      alt: "Acting reel",
      category: "Behind the Scenes",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753989756/WhatsApp_Image_2025-08-01_at_00.52.06_cc50fc7b_xqdpao.jpg",
      alt: "Professional headshot",
      category: "Celebs",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1753989927/For_y.play.z_Styling_and_Direction_ayushi_agarwaaal_khyati_tyagi_Photographer_amitanand_r_zzptim.mp4",
      poster: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753989918/8c5060b7-b0ee-4e8e-9dca-07f4d196deef.png",
      alt: "Acting reel",
      category: "Behind the Scenes",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753990084/WhatsApp_Image_2025-08-01_at_00.52.05_f899158f_bhbkof.jpg",
      alt: "Behind the scenes",
      category: "Behind the Scenes",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753991231/dcf6eaab-76ec-4d33-9941-8672c7b2ddbf.png",
      alt: "Drip",
      category: "Drips",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/dj2u6y8iv/video/upload/v1753990791/bts_mehr_upcomingmovie_kidmodel_kidmodel_model_sikhboy_shoot_vifuq9.mp4",
      poster: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753990540/e686ce6b-0443-4541-9b1e-d655e6615c6e.png",
      alt: "Movie Still",
      category: "Movies",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753991672/ca246fc0-d16f-4386-afc7-99caa2a36a36.png",
      alt: "Award ceremony",
      category: "Events",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753991496/WhatsApp_Image_2025-08-01_at_00.52.06_4ce2a2ed_y0xri3.jpg",
      alt: "Professional headshot",
      category: "Celebs",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753990269/IMG-20221224-WA0001_nyprap.jpg",
      alt: "Photo shoot",
      category: "Photo Shoots",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753992158/WhatsApp_Image_2025-08-01_at_00.52.05_fe08f35e_setn0k.jpg",
      alt: "Professional headshot",
      category: "Celebs",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753991999/shoot_christmasshoot_shootdiaries_beautifulpics_ll1iy3.jpg",
      alt: "Photo shoot",
      category: "Photo Shoots",
    },
    // Add advertisements to the combined media array
    ...advertisements.map((ad) => ({
      type: ad.type,
      src: ad.src,
      alt: ad.alt,
      category: "Advertisements",
    })),
  ]

  const openLightbox = (index: number) => {
    setCurrentMedia(index)
    setLightboxOpen(true)
    if (galleryMedia[index].type === "video") {
      setIsPlaying(true)
    }
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const nextMedia = () => {
    setCurrentMedia((prev) => (prev + 1) % galleryMedia.length)
    setIsPlaying(false)
  }

  const prevMedia = () => {
    setCurrentMedia((prev) => (prev - 1 + galleryMedia.length) % galleryMedia.length)
    setIsPlaying(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Landing Animation */}
      <div className="fixed inset-0 z-10">
        <div className="relative w-full h-full flex justify-center items-end bg-gray-600">
          {/* Desktop Background */}
          <div className="hidden md:block absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('https://res.cloudinary.com/dj2u6y8iv/image/upload/v1754001128/final_npqgji.png')` }}
            />
            {/* Dark gradient fade from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
          </div>

          {/* Mobile Background */}
          <div className="md:hidden absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('https://res.cloudinary.com/dj2u6y8iv/image/upload/v1754001055/bg2_ee58um.png')` }}
            />
            {/* Dark gradient fade from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-30 w-full px-4 pb-8 md:pb-12 flex items-end justify-center min-h-screen">
            <div className="text-center">
              {/* Mobile Text Only - Split "AGAMVIR" and "SINGH" */}
              <div className="md:hidden">
                <motion.h1
                  className="text-5xl font-bold text-white mb-2"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                >
                  AGAMVIR
                </motion.h1>
                <motion.h1
                  className="text-5xl font-bold text-white mb-6"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                >
                  SINGH
                </motion.h1>
              </div>

              {/* Desktop Text - Add after subtitle */}
              <div className="hidden md:block">
                <motion.h1
                  className="text-6xl md:text-7xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                >
                  AGAMVIR SINGH
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-2xl text-white mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                Child Actor • Rising Star • Dream Chaser
              </motion.p>

              {/* View Portfolio Button */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <Button
                  onClick={() => setShowPortfolio(true)}
                  className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transition-all duration-300 text-lg px-8 py-3 rounded-full"
                >
                  View Portfolio
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                className="flex justify-center space-x-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3 }}
              >
                {socialMedia.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3.2 + index * 0.1 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            className="fixed inset-0 z-50 backdrop-blur-md bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full overflow-y-auto">
              {/* Navigation */}
              <nav className="sticky top-0 z-60 bg-white/10 backdrop-blur-lg border-b border-white/20">
                <div className="container mx-auto px-4 py-4">
                  <div className="flex items-center justify-between">
                    <motion.h2
                      className="text-2xl font-bold text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      Agamvir Singh
                    </motion.h2>

                    <div className="hidden md:flex items-center space-x-6">
                      {portfolioSections.map((section) => {
                        const Icon = section.icon
                        return (
                          <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                              activeSection === section.id ? "bg-white text-black" : "text-white hover:bg-white/20"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{section.label}</span>
                          </button>
                        )
                      })}

                      {/* Quick Social Links */}
                      <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/20">
                        {socialMedia.slice(0, 3).map((social) => {
                          const Icon = social.icon
                          return (
                            <a
                              key={social.platform}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                              title={social.platform}
                            >
                              <Icon className="h-4 w-4" />
                            </a>
                          )
                        })}
                      </div>
                    </div>

                    <Button
                      onClick={() => setShowPortfolio(false)}
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                    >
                      ✕
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="md:hidden mt-4 flex space-x-2 overflow-x-auto pb-2">
                    {portfolioSections.map((section) => {
                      const Icon = section.icon
                      return (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                            activeSection === section.id ? "bg-white text-black" : "text-white hover:bg-white/20"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="text-sm">{section.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </nav>

              {/* Content */}
              <div className="container mx-auto px-4 py-8">
                <AnimatePresence mode="wait">
                  {activeSection === "home" && (
                    <motion.div
                      key="home"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center text-white"
                    >
                      <div className="max-w-4xl mx-auto">
                        <img
                          src="https://res.cloudinary.com/dj2u6y8iv/image/upload/v1753985218/home1_lbpnjv.jpg"
                          alt="Agamvir Singh"
                          className="w-48 h-64 object-cover rounded-lg mx-auto mb-8 shadow-2xl"
                        />
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Agamvir Singh</h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-300">Child Actor & Rising Star</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          <Card className="bg-white/10 backdrop-blur border-white/20">
                            <CardContent className="p-6 text-center">
                              <Film className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                              <h3 className="text-xl font-semibold mb-2 text-white">Movies</h3>
                              <p className="text-gray-300">Featured in 5+ films</p>
                            </CardContent>
                          </Card>
                          <Card className="bg-white/10 backdrop-blur border-white/20">
                            <CardContent className="p-6 text-center">
                              <Camera className="h-12 w-12 mx-auto mb-4 text-green-400" />
                              <h3 className="text-xl font-semibold mb-2 text-white">Advertisements</h3>
                              <p className="text-gray-300">10+ brand campaigns</p>
                            </CardContent>
                          </Card>
                          <Card className="bg-white/10 backdrop-blur border-white/20">
                            <CardContent className="p-6 text-center">
                              <Award className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                              <h3 className="text-xl font-semibold mb-2 text-white">Awards</h3>
                              <p className="text-gray-300">3 major recognitions</p>
                            </CardContent>
                          </Card>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          A passionate young actor with a natural talent for bringing characters to life. With
                          experience in both film and television, Agamvir continues to captivate audiences with
                          authentic performances and boundless energy.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeSection === "gallery" && (
                    <motion.div
                      key="gallery"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-white"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Gallery</h2>

                      {/* Gallery Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {galleryMedia.slice(0, 11).map((media, index) => (
                          <motion.div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-lg bg-white/10 backdrop-blur border border-white/20"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => openLightbox(index)}
                          >
                            <div className="aspect-square relative">
                              {media.type === "image" ? (
                                <img
                                  src={media.src || "/placeholder.svg"}
                                  alt={media.alt}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="relative w-full h-full">
                                  <img
                                    src={("poster" in media && media.poster) ? media.poster : "/placeholder.svg"}
                                    alt={media.alt}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                    <Play className="h-12 w-12 text-white" />
                                  </div>
                                </div>
                              )}

                              {/* Overlay */}
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                  {media.type === "video" ? (
                                    <Video className="h-8 w-8 text-white mx-auto mb-2" />
                                  ) : (
                                    <ImageIcon className="h-8 w-8 text-white mx-auto mb-2" />
                                  )}
                                  <p className="text-white text-sm">{media.category}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeSection === "movies" && (
                    <motion.div
                      key="movies"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-white"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Movies</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {movies.map((movie, index) => (
                          <Card
                            key={index}
                            className="bg-white/10 backdrop-blur border-white/20 overflow-hidden group hover:scale-105 transition-transform duration-300"
                          >
                            <div className="relative">
                              <img
                                src={movie.poster || "/placeholder.svg"}
                                alt={movie.title}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Play className="h-12 w-12 text-white" />
                              </div>
                            </div>
                            <CardContent className="p-4">
                              <h3 className="text-xl font-semibold mb-2 text-white">{movie.title}</h3>
                              <div className="flex justify-between items-center">
                                <Badge variant="secondary">{movie.year}</Badge>
                                <span className="text-sm text-gray-300">{movie.role}</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeSection === "ads" && (
                    <motion.div
                      key="ads"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-white"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Advertisements</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advertisements.map((ad, index) => (
                          <motion.div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-lg bg-white/10 backdrop-blur border border-white/20"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => openLightbox(11 + index)}
                          >
                            <div className="relative">
                              <img
                                src={ad.thumbnail || "/placeholder.svg"}
                                alt={ad.brand}
                                className="w-full h-48 object-cover"
                              />
                              {ad.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                  <Play className="h-12 w-12 text-white" />
                                </div>
                              )}
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                  {ad.type === "video" ? (
                                    <Video className="h-8 w-8 text-white mx-auto mb-2" />
                                  ) : (
                                    <ImageIcon className="h-8 w-8 text-white mx-auto mb-2" />
                                  )}
                                  <p className="text-white text-sm">Click to view</p>
                                </div>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold mb-2 text-white">{ad.brand}</h3>
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-300">
                                  {ad.type === "video" ? "Video Campaign" : "Print Ad"}
                                </span>
                                <Badge variant="outline">{ad.year}</Badge>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeSection === "awards" && (
                    <motion.div
                      key="awards"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-white"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Awards & Recognition</h2>
                      <div className="max-w-4xl mx-auto space-y-6">
                        {awards.map((award, index) => (
                          <Card key={index} className="bg-white/10 backdrop-blur border-white/20">
                            <CardContent className="p-6 flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <Award className="h-12 w-12 text-yellow-400" />
                              </div>
                              <div className="flex-grow">
                                <h3 className="text-xl font-semibold mb-1 text-white">{award.title}</h3>
                                <p className="text-gray-300 mb-1">{award.event}</p>
                                <Badge variant="secondary">{award.year}</Badge>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeSection === "social" && (
                    <motion.div
                      key="social"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-white"
                    >
                      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Connect With Me</h2>

                      {/* Social Media Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {socialMedia.map((social, index) => {
                          const Icon = social.icon
                          return (
                            <Card
                              key={index}
                              className="bg-white/10 backdrop-blur border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300"
                            >
                              <CardContent className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                  <div className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20">
                                    <Icon className="h-6 w-6 text-white" />
                                  </div>
                                  <div className="flex-grow">
                                    <h3 className="text-xl font-semibold text-white">{social.platform}</h3>
                                    <p className="text-gray-300 text-sm">{social.handle}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-lg font-bold text-white">{social.followers}</p>
                                    <p className="text-xs text-gray-400">followers</p>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between">
                                  <span className="text-gray-300 font-mono text-sm">{social.handle}</span>
                                  <Button
                                    asChild
                                    className="bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20"
                                  >
                                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                                      Follow
                                    </a>
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        })}
                      </div>

                      {/* Contact Information */}
                      <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-6 text-center">Professional Contact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card className="bg-white/10 backdrop-blur border-white/20">
                            <CardContent className="p-6 text-center">
                              <Mail className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                              <h4 className="font-semibold text-white mb-2">Management</h4>
                              <p className="text-gray-300 text-sm">management@agamvirsingh.com</p>
                            </CardContent>
                          </Card>
                          <Card className="bg-white/10 backdrop-blur border-white/20">
                            <CardContent className="p-6 text-center">
                              <Phone className="h-8 w-8 mx-auto mb-3 text-green-400" />
                              <h4 className="font-semibold text-white mb-2">Booking</h4>
                              <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                          <h4 className="text-xl font-semibold text-white mb-2">Let's Work Together!</h4>
                          <p className="text-gray-300 mb-4">
                            Available for film projects, commercials, and brand collaborations
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button className="bg-white text-black hover:bg-gray-200">
                              <Mail className="h-4 w-4 mr-2" />
                              Send Message
                            </Button>
                            <Button
                              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                            >
                              <Phone className="h-4 w-4 mr-2" />
                              Schedule Call
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                onClick={closeLightbox}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                onClick={prevMedia}
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={nextMedia}
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Media Content */}
              <div className="relative bg-black rounded-lg overflow-hidden">
                {galleryMedia[currentMedia]?.type === "image" ? (
                  <img
                    src={galleryMedia[currentMedia].src || "/placeholder.svg"}
                    alt={galleryMedia[currentMedia].alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                ) : (
                  <div className="relative">
                    <video
                      ref={videoRef}
                      src={galleryMedia[currentMedia]?.src}
                      poster={galleryMedia[currentMedia]?.poster}
                      className="w-full h-auto max-h-[80vh] object-contain"
                      autoPlay
                      controls
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                  </div>
                )}

                {/* Media Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold mb-1">{galleryMedia[currentMedia]?.alt}</h3>
                  <p className="text-gray-300 text-sm">{galleryMedia[currentMedia]?.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
