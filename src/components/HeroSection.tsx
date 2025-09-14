import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Chat, Play, Star, Clock, Shield, Trophy } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* REVOLUTIONARY BACKGROUND - FORMES GÉOMÉTRIQUES */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,1 17,5 17,13 10,17 3,13 3,5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" className="text-primary"/>
          </svg>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 transform rotate-45 rounded-2xl animate-pulse"></div>
        <div className="absolute bottom-16 left-8 w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-500/20 transform rotate-12 animate-pulse" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-20">
        <div className="block md:hidden pt-1"></div>
        
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-8 items-center">
          <div className="space-y-2 lg:space-y-5 max-w-full">
            <div className="space-y-1.5 lg:space-y-3">
              <div className="flex flex-col gap-1.5">
                <div className="relative">
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="bg-white rounded-3xl px-3 py-1.5 flex items-center gap-2">
                      <Star size={12} className="text-yellow-500 fill-current" />
                      <span className="text-sm font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        #1 Reinigungsservice in Köln
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-2 py-1 shadow-xl">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-white fill-current" />
                    ))}
                  </div>
                  <div className="bg-white rounded-full px-2 py-1 shadow-lg border-2 border-yellow-400">
                    <span className="text-sm font-bold text-gray-800">4.9 (500+)</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.1] tracking-tight max-w-full">
                  <div className="relative inline-block">
                    <span className="block text-gray-800">Professionelle</span>
                    <div className="absolute -top-1 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-bounce"></div>
                  </div>
                  <div className="relative inline-block">
                    <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                      KI-Reinigung
                    </span>
                    <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-blue-500 transform rotate-45"></div>
                  </div>
                  <div className="relative inline-block">
                    <span className="block text-gray-800">in Köln</span>
                    <div className="absolute -top-1.5 -right-3 w-2 h-2 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full"></div>
                  </div>
                </h1>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-2 lg:p-3 border-2 border-blue-200/50 shadow-xl">
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed font-medium">
                    Erhalten Sie sofortige Kostenvoranschläge in{" "}
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full font-black shadow-lg">
                      unter 60 Sekunden
                    </span>{" "}und erleben Sie Deutschlands fortschrittlichste Reinigungsplattform.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="block sm:hidden space-y-1.5">
                {[
                  { icon: Clock, text: "Sofortige KI-Kostenvoranschläge", highlight: "60 Sek.", gradient: "from-blue-400 to-cyan-500" },
                  { icon: Shield, text: "DSGVO-konform & sicher", highlight: "100%", gradient: "from-green-400 to-emerald-500" },
                  { icon: Chat, text: "24/7 KI-Kundenservice", highlight: "Always", gradient: "from-purple-400 to-pink-500" },
                  { icon: Trophy, text: "Deutsche Qualitätsstandards", highlight: "Premium", gradient: "from-orange-400 to-red-500" }
                ].map((feature, index) => (
                  <div key={index} className={`bg-gradient-to-r ${feature.gradient} p-1 shadow-2xl rounded-3xl hover:scale-105 transition-all duration-300`}>
                    <div className="bg-white rounded-3xl p-2 flex items-center gap-2">
                      <div className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <feature.icon size={16} className="text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-gray-800 leading-tight">{feature.text}</div>
                        <div className={`text-sm font-black bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                          {feature.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="hidden sm:grid sm:grid-cols-2 gap-2">
                {[
                  { icon: Clock, text: "Sofortige KI-Kostenvoranschläge", highlight: "60 Sek.", gradient: "from-blue-400 to-cyan-500" },
                  { icon: Shield, text: "DSGVO-konform & sicher", highlight: "100%", gradient: "from-green-400 to-emerald-500" },
                  { icon: Chat, text: "24/7 KI-Kundenservice", highlight: "Always", gradient: "from-purple-400 to-pink-500" },
                  { icon: Trophy, text: "Deutsche Qualitätsstandards", highlight: "Premium", gradient: "from-orange-400 to-red-500" }
                ].map((feature, index) => (
                  <div key={index} className={`bg-gradient-to-br ${feature.gradient} p-1 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300`}>
                    <div className="bg-white rounded-3xl p-2 flex items-center gap-2 h-full">
                      <div className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <feature.icon size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800">{feature.text}</div>
                        <div className={`text-sm font-black bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                          {feature.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 pt-1.5">
              <div className="block sm:hidden space-y-2 mb-6">
                <div className="relative">
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-[2rem] shadow-2xl">
                    <Button size="lg" className="w-full text-base px-4 py-4 gap-2 rounded-[1.8rem] bg-white text-gray-800 border-0 shadow-xl font-black min-h-[40px]">
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-red-500 rounded-2xl flex items-center justify-center">
                        <Chat size={14} className="text-white" />
                      </div>
                      <span>Kostenvoranschlag in 60 Sek.</span>
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-1 rounded-3xl shadow-xl">
                    <Button variant="outline" size="lg" className="w-full text-sm px-3 py-3 gap-2 rounded-3xl bg-white border-0 shadow-lg font-bold text-gray-800 min-h-[35px]">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                        <Play size={12} className="text-white" />
                      </div>
                      <span>Demo ansehen</span>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:flex gap-3">
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-3xl shadow-2xl">
                  <Button size="lg" className="text-base px-6 py-4 gap-3 rounded-3xl bg-white text-gray-800 border-0 shadow-xl font-bold min-h-[48px]">
                    <Chat size={20} className="text-orange-500" />
                    <span>Kostenvoranschlag in 60 Sek.</span>
                  </Button>
                </div>
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-1 rounded-3xl shadow-xl">
                  <Button variant="outline" size="lg" className="text-base px-6 py-4 gap-3 rounded-3xl bg-white border-0 shadow-lg font-bold text-gray-800 min-h-[48px]">
                    <Play size={20} className="text-purple-500" />
                    <span>Demo ansehen</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <div className="grid grid-cols-2 gap-2 sm:hidden">
                {[
                  { value: "500+", label: "Zufriedene Kunden", gradient: "from-blue-400 to-cyan-500" },
                  { value: "15+", label: "Jahre Erfahrung", gradient: "from-green-400 to-emerald-500" },
                  { value: "24/7", label: "KI-Support", gradient: "from-purple-400 to-pink-500" },
                  { value: "99%", label: "Kundenzufriedenheit", gradient: "from-orange-400 to-red-500" }
                ].map((stat, index) => (
                  <div key={index} className={`bg-gradient-to-br ${stat.gradient} p-1 shadow-xl rounded-3xl`}>
                    <div className="bg-white rounded-3xl p-2 text-center h-full flex flex-col justify-center">
                      <div className={`text-lg font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-0.5`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 font-semibold leading-tight">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="hidden sm:flex items-center gap-4">
                {[
                  { value: "500+", label: "Zufriedene Kunden", gradient: "from-blue-400 to-cyan-500" },
                  { value: "15+", label: "Jahre Erfahrung", gradient: "from-green-400 to-emerald-500" },
                  { value: "24/7", label: "KI-Support", gradient: "from-purple-400 to-pink-500" },
                  { value: "99%", label: "Kundenzufriedenheit", gradient: "from-orange-400 to-red-500" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`bg-gradient-to-br ${stat.gradient} p-1 rounded-2xl shadow-xl mb-1`}>
                      <div className="bg-white rounded-2xl px-2 py-1">
                        <div className={`text-2xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="relative h-[200px] lg:h-[350px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-[3rem] shadow-2xl" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}>
                <div className="p-4 h-full flex flex-col relative overflow-hidden">
                  <div className="relative">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-3 shadow-xl border-2 border-white/50">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Chat size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">KI-Assistent</div>
                          <div className="text-xs text-gray-600 font-semibold">Online • Antwortet sofort</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3 overflow-hidden mt-4">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-1 rounded-3xl shadow-xl ml-2">
                      <div className="bg-white rounded-3xl p-2">
                        <p className="text-xs font-semibold text-gray-800">Hallo! Ich bin Ihr KI-Assistent. Wie kann ich Ihnen helfen?</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 p-1 rounded-3xl shadow-xl mr-2">
                      <div className="bg-white rounded-3xl p-2">
                        <p className="text-xs font-semibold text-gray-800">Ich brauche eine Büroreinigung für 150m²</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-1 rounded-3xl shadow-xl ml-2">
                      <div className="bg-white rounded-3xl p-2">
                        <p className="text-xs font-semibold text-gray-800 mb-2">Perfekt! Basierend auf Ihren Angaben:</p>
                        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-2xl shadow-lg">
                          <div className="bg-white rounded-2xl p-2">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-bold text-gray-800">Geschätzte Kosten:</span>
                              <span className="text-lg font-black bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">€127,50</span>
                            </div>
                            <div className="text-xs text-gray-600 font-semibold mt-0.5">Für 150m² Bürofläche</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-green-400 to-emerald-500 p-1 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-3xl p-2 flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <div>
                    <div className="text-xs font-black text-gray-800">Angebot erstellt</div>
                    <div className="text-xs font-semibold text-gray-600">in 1,2 Sekunden</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-yellow-400 to-orange-500 p-1 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-3xl p-2 flex items-center gap-2">
                  <Star size={16} className="text-yellow-500 fill-current" />
                  <div>
                    <div className="text-xs font-black text-gray-800">99% Genauigkeit</div>
                    <div className="text-xs font-semibold text-gray-600">KI-Kostenvoranschlag</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
