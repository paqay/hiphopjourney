import { Music, Video, TrendingUp, Users, Mail, Calendar, CheckCircle2, FileText, X, Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ReactMarkdown from "react-markdown";
import hiphopJourneyTag from "@/assets/HHJ_Spin_3D_Logo.webm";
import hiphopJourneyTagFallback from "@/assets/hiphop-journey-tag.svg";
import logoImage from "@/assets/HHJ_logo_w.png";
import trPortrait from "@/assets/tr_portrait.jpeg";
import jePortrait from "@/assets/je_portrait.jpeg";
import mePortrait from "@/assets/me_portrait.jpeg";
import { useState, useEffect } from "react";

const Index = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});
  const [activeSection, setActiveSection] = useState("hero");
  const [supportsWebM, setSupportsWebM] = useState<boolean | null>(null);
  const [markdownContent, setMarkdownContent] = useState<{ [key: string]: string }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleCard = (name: string) => {
    setFlippedCards(prev => ({ ...prev, [name]: !prev[name] }));
  };

  useEffect(() => {
    // Check if device is mobile or Safari (Safari has poor WebM alpha support)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setSupportsWebM(!isMobile && !isSafari); // Only non-Safari desktop gets WebM
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "team", "objectives", "results", "milestones", "dokumentation"];
      const scrollPosition = window.scrollY + 100; // More responsive scroll detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 150; // Start transition earlier
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // Call immediately on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const teamMembers = [
    {
      name: "Jakob Ebner",
      role: "Music Production",
      focus: "Beat-Komposition, Mixing & Mastering",
      description: "Gestaltung, Produktion und Analyse von Rap-Parts, Beat-Komposition sowie Mixing & Mastering",
      email: "jebner@student.tgm.ac.at",
      icon: Music,
      portrait: jePortrait,
      gradient: "from-primary to-secondary",
    },
    {
      name: "Mohamed El Shal",
      role: "Video Production",
      focus: "Kameraführung & Postproduktion",
      description: "Drehplanung, Kameraführung und Postproduktion des Musikvideos und der Promotionclips",
      email: "mel2@student.tgm.ac.at",
      icon: Video,
      portrait: mePortrait,
      gradient: "from-secondary to-accent",
    },
    {
      name: "Toma Nikolaj Ristic",
      role: "Performance & Analytics",
      focus: "Rap-Performance & Data Science",
      description: "Gestaltung von Rap-Parts und Data Science Analyse der Promotion",
      email: "tristic@student.tgm.ac.at",
      icon: TrendingUp,
      portrait: trPortrait,
      gradient: "from-accent to-primary",
    },
  ];

  const milestones = [
    { date: "01.10.2025", title: "Songtext finalisiert und Beat-Grundlage erstellt" },
    { date: "15.10.2025", title: "Rap-Parts aufgenommen und erste Songversion erstellt" },
    { date: "10.11.2025", title: "Mix & Mastering abgeschlossen, finale Songversion fertig" },
    { date: "25.11.2025", title: "Konzept für Musikvideo erstellt und Drehorte festgelegt" },
    { date: "15.12.2025", title: "Musikvideodreh abgeschlossen" },
    { date: "05.01.2026", title: "Rohschnitt des Musikvideos erstellt" },
    { date: "20.01.2026", title: "Color Grading und visuelle Effekte abgeschlossen" },
    { date: "05.02.2026", title: "Data-Science-Analyse zur Social-Media-Promotion abgeschlossen" },
    { date: "05.03.2026", title: "Finaler Song und Musikvideo veröffentlicht" },
    { date: "07.04.2026", title: "Abgabe" },
  ];

  const objectives = [
    {
      title: "Kreative Produktion",
      description: "Professionelle Musikproduktion mit künstlerischem Anspruch und technischer Exzellenz",
    },
    {
      title: "Visuelle Umsetzung",
      description: "Musikvideo, das die künstlerische Aussage transportiert und plattformgerecht aufbereitet ist",
    },
    {
      title: "Datenbasierte Strategie",
      description: "Marketing-Analyse zur gezielten Steigerung der Reichweite auf Social Media Plattformen",
    },
  ];

  const loadMarkdown = async (date: string) => {
    if (markdownContent[date]) return; // Already loaded
    
    try {
      // Convert date format from DD.MM.YYYY to YYYY-MM-DD for filename
      const [day, month, year] = date.split('.');
      const filename = `${year}-${month}-${day}.md`;
      
      // Use import.meta.env.BASE_URL to get the correct base path
      const basePath = import.meta.env.BASE_URL;
      const response = await fetch(`${basePath}dokumentation/${filename}`);
      
      // Check if response is actually a markdown file
      const contentType = response.headers.get('content-type');
      const isHtml = contentType?.includes('text/html');
      
      if (response.ok && !isHtml) {
        const text = await response.text();
        setMarkdownContent(prev => ({ ...prev, [date]: text }));
      } else {
        setMarkdownContent(prev => ({ ...prev, [date]: `# Dokumentation vom ${date}\n\nKeine Dokumentation verfügbar.` }));
      }
    } catch (error) {
      setMarkdownContent(prev => ({ ...prev, [date]: `# Dokumentation vom ${date}\n\nFehler beim Laden der Dokumentation.` }));
    }
  };

  const dokumentationen = [
    { date: "25.10.2025" },
    { date: "08.11.2025" },
    { date: "22.11.2025" },
    { date: "06.12.2025" },
    { date: "20.12.2025" },
    { date: "03.01.2026" },
    { date: "17.01.2026" },
    { date: "31.01.2026" },
    { date: "14.02.2026" },
    { date: "28.02.2026" },
    { date: "14.03.2026" },
    { date: "28.03.2026" },
    { date: "11.04.2026" },
  ];

  const menuItems = [
    { id: "hero", label: "Start" },
    { id: "team", label: "Team" },
    { id: "objectives", label: "Ziele" },
    { id: "results", label: "Ergebnisse" },
    { id: "milestones", label: "Meilensteine" },
    { id: "dokumentation", label: "Dokumentation" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-[40px] backdrop-saturate-[180%]">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center">
            <Menubar className="bg-transparent border-0 space-x-1 relative">
              {menuItems.map((item) => (
                <MenubarMenu key={item.id}>
                  <MenubarTrigger
                    onClick={() => scrollToSection(item.id)}
                    className={`cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg ${item.id === "hero" ? "" : (activeSection === item.id
                        ? "text-primary"
                        : "hover:text-primary")
                      }`}
                  >
                    {item.id === "hero" ? (
                      <img
                        src={logoImage}
                        alt="Logo"
                        className={`h-6 transition-all duration-300 ${activeSection === "hero"
                            ? "[filter:brightness(0)_saturate(100%)_invert(29%)_sepia(95%)_saturate(7441%)_hue-rotate(357deg)_brightness(99%)_contrast(117%)]"
                            : "hover:[filter:brightness(0)_saturate(100%)_invert(29%)_sepia(95%)_saturate(7441%)_hue-rotate(357deg)_brightness(99%)_contrast(117%)]"
                          }`}
                      />
                    ) : (
                      item.label
                    )}
                  </MenubarTrigger>
                </MenubarMenu>
              ))}
            </Menubar>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between">
            <img
              src={logoImage}
              alt="Logo"
              className="h-6 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="glass border-0 w-64">
                <nav className="flex flex-col space-y-4 mt-8">
                  {menuItems.filter(item => item.id !== "hero").map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-primary/20 text-primary font-semibold"
                          : "hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-8">
            {supportsWebM === true ? (
              <video
                ref={(video) => {
                  if (video) {
                    video.onended = () => {
                      setTimeout(() => {
                        video.currentTime = 0;
                        video.play();
                      }, 1000); // Wait 1 second before restarting
                    };
                  }
                }}
                src={hiphopJourneyTag}
                autoPlay
                muted
                playsInline
                className="w-full max-w-3xl mx-auto animate-float filter drop-shadow-2xl rounded-2xl"
              >
                Your browser does not support the video tag.
              </video>
) : supportsWebM === false ? (
              <img
                src={hiphopJourneyTagFallback}
                alt="Hip Hop Journey"
                className="w-full max-w-3xl mx-auto animate-float filter drop-shadow-2xl rounded-2xl"
              />
            ) : (
              // While detection runs (null), show fallback to avoid black flash on unsupported devices
              <img
                src={hiphopJourneyTagFallback}
                alt="Hip Hop Journey"
                className="w-full max-w-3xl mx-auto animate-float filter drop-shadow-2xl rounded-2xl"
              />
            )}


            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Eine professionelle Musikproduktion im deutschen Trap-Genre
            </p>
          </div>

          <div className="glass glass-hover rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto mt-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground/90">
              Deutscher Trap zählt zu den am stärksten wachsenden Genres im deutschsprachigen Raum.
              Diese Diplomarbeit dokumentiert den Ablauf einer professionellen Musikproduktion,
              die Planung und Umsetzung eines Musikvideos sowie die Entwicklung einer datenbasierten
              Marketing-Strategie für erfolgreiche Vermarktung und Distribution.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a target="_blank" href="https://www.tgm.ac.at/">
              <div className="glass glass-hover rounded-2xl px-6 py-3">
                <p className="text-sm text-muted-foreground">Schule</p>
                <p className="text-lg font-semibold">TGM</p>
              </div>
            </a>
            <div className="glass rounded-2xl px-6 py-3">
              <p className="text-sm text-muted-foreground">Klasse</p>
              <p className="text-lg font-semibold">5DHITM</p>
            </div>
            <div className="glass rounded-2xl px-6 py-3">
              <p className="text-sm text-muted-foreground">Abgabe</p>
              <p className="text-lg font-semibold">März 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-2 mb-4">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Das Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Drei Perspektiven,
              <br />
              <span className="gradient-text">ein Projekt</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              const isFlipped = flippedCards[member.name];
              return (
                <div
                  key={member.name}
                  className="perspective-1000 h-[400px] animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${0.1 * index}s` }}
                  onClick={() => toggleCard(member.name)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? "rotate-y-180" : ""
                      }`}
                  >
                    {/* Vorderseite */}
                    <Card className="absolute w-full h-full glass border-0 p-8 space-y-6 backface-hidden transition-shadow duration-300 hover:shadow-[0_0_60px_hsl(0_84%_60%/0.4)]">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center glow`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                        {/* <p className="text-sm text-muted-foreground font-medium">{member.focus}</p> */}
                      </div>

                      <p className="text-foreground/80 leading-relaxed">
                        {member.description}
                      </p>
                    </Card>

                    {/* Rückseite */}
                    <Card className="absolute w-full h-full glass border-0 p-8 rotate-y-180 backface-hidden flex flex-col items-center justify-center space-y-6 transition-shadow duration-300 hover:shadow-[0_0_60px_hsl(0_84%_60%/0.4)]">
                      <div className="w-48 h-48 rounded-2xl overflow-hidden glow">
                        <img 
                          src={member.portrait} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-3 text-center">
                        <h3 className="text-2xl font-bold">{member.name}</h3>
                        <p className="text-lg font-medium text-primary">{member.role}</p>
                        <div className="flex items-center gap-2 justify-center pt-4">
                          <Mail className="w-5 h-5 text-primary" />
                          <a
                            href={`mailto:${member.email}`}
                            className="text-foreground hover:text-primary transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text">Zielsetzung</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Einblick in die Produktionsprozesse gewähren, Analyse dessen und einen Nutzen
              aus den gemachten Erfahrungen ziehen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={objective.title}
                className="glass glass-hover rounded-3xl p-8 space-y-4 animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                <h3 className="text-2xl font-bold">{objective.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Geplante <span className="gradient-text">Ergebnisse</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass glass-hover rounded-3xl p-8 sm:p-12 space-y-4 animate-slide-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 glow">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-bold">Fertiger Track</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Ein vollständig produzierter Song mit Beat, Rap-Parts, professionellem Mixing und Mastering.
                    Veröffentlicht auf Spotify und weiteren Streaming-Plattformen (.wav Datei)
                  </p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover rounded-3xl p-8 sm:p-12 space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 glow">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-bold">Musikvideo & Content</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Vollständiges Musikvideo für YouTube, ergänzt durch Teaser-Clips und Behind-the-Scenes-Material
                    zur Promotion des Hauptprodukts (.mp4 Datei)
                  </p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover rounded-3xl p-8 sm:p-12 space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 glow">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-bold">Data Science Analyse</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Datenbasierte Marketing-Strategie mit konkreten Methoden für Distribution und Promotion auf
                    Social Media zur gezielten Steigerung der Reichweite (Text-Datei)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-2 mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Zeitplan</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text">Meilensteine</span>
            </h2>
          </div>

          <div className="relative">
            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const isFirst = index === 0;
                const isLast = index === milestones.length - 1;
                
                // Parse milestone date and compare to 15.10.2025
                const [day, month, year] = milestone.date.split('.').map(Number);
                const milestoneDate = new Date(year, month - 1, day);
                const cutoffDate = new Date(2025, 9, 15); // October 15, 2025
                const isCompleted = milestoneDate <= cutoffDate;

                // Check if next milestone is completed (for line color)
                let isNextCompleted = false;
                if (!isLast) {
                  const [nextDay, nextMonth, nextYear] = milestones[index + 1].date.split('.').map(Number);
                  const nextMilestoneDate = new Date(nextYear, nextMonth - 1, nextDay);
                  isNextCompleted = nextMilestoneDate <= cutoffDate;
                }

                return (
                  <div
                    key={index}
                    className="relative pl-20 animate-slide-up"
                    style={{ animationDelay: `${0.05 * index}s` }}
                  >
                    {/* Timeline line - nur zwischen Elementen */}
                    {!isLast && (
                      <div className={`absolute left-8 top-6 w-0.5 h-[calc(100%+2rem)] ${
                        isNextCompleted 
                          ? "bg-gradient-to-b from-primary via-secondary to-accent" 
                          : "bg-muted"
                      }`} />
                    )}

                    {/* Timeline dot */}
                    <div className={`absolute left-6 top-6 w-5 h-5 rounded-full flex items-center justify-center z-10 ${
                      isCompleted 
                        ? "bg-gradient-to-br from-primary to-secondary glow" 
                        : "bg-muted"
                    }`}>
                      <CheckCircle2 className={`w-3 h-3 ${isCompleted ? "text-white" : "text-muted-foreground"}`} />
                    </div>

                    <div className="glass glass-hover rounded-2xl p-6 space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full glass ${
                          isCompleted ? "text-primary" : "text-muted-foreground"
                        }`}>
                          {milestone.date}
                        </span>
                        <h3 className={`text-lg font-semibold ${
                          isCompleted ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Fortschrittsdokumentation Section */}
      <section id="dokumentation" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-2 mb-4">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Fortschritt</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text">Fortschrittsdokumentation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dokumentation des Projektfortschritts alle zwei Wochen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {dokumentationen.map((dok, index) => {
              // Parse documentation date and compare to today
              const [day, month, year] = dok.date.split('.').map(Number);
              const dokDate = new Date(year, month - 1, day);
              const today = new Date();
              today.setHours(0, 0, 0, 0); // Reset time to compare dates only
              const isPast = dokDate <= today;
              
              const cardContent = (
                <Card 
                  className={`glass border-0 overflow-hidden transition-all duration-300 h-full animate-slide-up ${
                    isPast 
                      ? "hover:shadow-[0_0_60px_hsl(0_84%_60%/0.15)] cursor-pointer hover:scale-105" 
                      : "opacity-40 cursor-not-allowed"
                  }`}
                  style={{ animationDelay: `${0.01 * index}s` }}
                >
                  <div className="p-4 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 ${
                      isPast ? "" : "opacity-50"
                    }`}>
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-sm font-bold transition-colors truncate ${
                        isPast ? "" : "text-muted-foreground"
                      }`}>
                        {dok.date}
                      </h3>
                    </div>
                  </div>
                </Card>
              );
              
              return isPast ? (
                <Dialog key={dok.date}>
                  <DialogTrigger asChild onClick={() => loadMarkdown(dok.date)}>
                    {cardContent}
                  </DialogTrigger>
                  <DialogContent className="glass border-0 rounded-3xl max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">
                        Dokumentation vom {dok.date}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 prose prose-invert max-w-none">
                      {markdownContent[dok.date] ? (
                        <ReactMarkdown>{markdownContent[dok.date]}</ReactMarkdown>
                      ) : (
                        <p className="text-foreground/60 italic">Lade Dokumentation...</p>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <div key={dok.date}>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            Diplomarbeit 2025/26 · HTL TGM · 5DHITM
          </p>
          <p className="text-sm text-muted-foreground">
            Betreuer: Alexander Wieser
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
