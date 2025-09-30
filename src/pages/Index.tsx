import { Music, Video, TrendingUp, Users, Mail, Calendar, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import hiphopJourneyTag from "@/assets/hiphop-journey-tag.png";

const Index = () => {
  const teamMembers = [
    {
      name: "Jakob Ebner",
      role: "Music Production",
      focus: "Beat-Komposition, Mixing & Mastering",
      description: "Gestaltung, Produktion und Analyse von Rap-Parts, Beat-Komposition sowie Mixing & Mastering",
      email: "jebner@student.tgm.ac.at",
      icon: Music,
      gradient: "from-primary to-secondary",
    },
    {
      name: "Mohamed El Shal",
      role: "Video Production",
      focus: "Kameraführung & Postproduktion",
      description: "Drehplanung, Kameraführung und Postproduktion des Musikvideos und der Promotionclips",
      email: "mel2@student.tgm.ac.at",
      icon: Video,
      gradient: "from-secondary to-accent",
    },
    {
      name: "Toma Nikolaj Ristic",
      role: "Performance & Analytics",
      focus: "Rap-Performance & Data Science",
      description: "Gestaltung von Rap-Parts und Data Science Analyse der Promotion",
      email: "tristic@student.tgm.ac.at",
      icon: TrendingUp,
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-8">
            <img 
              src={hiphopJourneyTag} 
              alt="Hip-Hop Journey" 
              className="w-full max-w-3xl mx-auto animate-float filter drop-shadow-2xl"

              
            />
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
            <div className="glass rounded-2xl px-6 py-3">
              <p className="text-sm text-muted-foreground">Schule</p>
              <p className="text-lg font-semibold">HTL TGM</p>
            </div>
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
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
              return (
                <Dialog key={member.name}>
                  <DialogTrigger asChild>
                    <Card
                      className="glass glass-hover border-0 p-8 space-y-6 animate-slide-up cursor-pointer transition-transform hover:scale-105"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center glow`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                        <p className="text-sm text-muted-foreground font-medium">{member.focus}</p>
                      </div>

                      <p className="text-foreground/80 leading-relaxed">
                        {member.description}
                      </p>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="glass border-border/50">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">{member.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="flex justify-center">
                        <div className={`w-48 h-48 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center glow`}>
                          <Icon className="w-24 h-24 text-white" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-lg font-medium text-primary">{member.role}</p>
                        <p className="text-muted-foreground">{member.focus}</p>
                        <div className="flex items-center gap-2 pt-4">
                          <Mail className="w-5 h-5 text-primary" />
                          <a href={`mailto:${member.email}`} className="text-foreground hover:text-primary transition-colors">
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-2 mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Zeitplan</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Projekt <span className="gradient-text">Meilensteine</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative pl-20 animate-slide-up"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary glow flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  
                  <div className="glass glass-hover rounded-2xl p-6 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold text-primary px-3 py-1 rounded-full glass">
                        {milestone.date}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
