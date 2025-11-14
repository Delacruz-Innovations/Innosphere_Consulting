import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Mail, Phone, MapPin, Award, ArrowLeft, ArrowRight, CheckCircle, Sparkles  } from 'lucide-react';

const LeadershipTeam = () => {
const [activeProfile, setActiveProfile] = useState(null);
const modalRef = useRef(null);
const overlayRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const leaders = [
   {
  id: 1,
  name: "Omoloye Boluwatife Amoss",
  title: "Junior Software Developer",
  specialty: "Expert Full Stack Developer",
  image: "https://codex65.netlify.app/assets/ME-B-9Umdx_.jpg",
  bio: "I am a passionate full stack developer dedicated to building seamless, intuitive, and high-performing digital experiences. I transform complex ideas into sleek, responsive, and scalable web applications — from pixel-perfect user interfaces to robust backend architectures. I believe every line of code tells a story, and I'm committed to making yours exceptional.",
  achievements: [
    "Developed and deployed over 15 high-quality websites in the last 5 years",
    "Contributed to multiple successful projects both locally and internationally",
    "Strong collaborator with excellent teamwork and communication skills"
  ],
  contact: {
    email: "omoloyeamoss65@gmail.com",
    phone: "+234 806 193 6756",
    location: "Lagos, Nigeria"
  },
  color: "from-emerald-500 to-teal-600"
},
{
  id: 2,
  name: "Tosin Ojo",
  title: "Founder & CEO",
  specialty: "Senior Business Analyst",
  image: "https://media.licdn.com/dms/image/v2/D4E03AQGl342D1FrLkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729240307610?e=1764806400&v=beta&t=lNlRIeJGT6fLWesFXySgDE8NTQToUCvnGBJiTkn1nBE",
  bio: "A seasoned Senior Business Consultant delivering end-to-end, high-impact solutions and driving sustainable business growth for organizations across multiple industries and sectors.",
  achievements: [
    "Worked with reputable organizations both locally and internationally",
    "Founder and CEO of multiple successful business ventures",
    "Recognized for strategic leadership and strong decision-making expertise"
  ],
  contact: {
    email: "delacruzltd.sam@gmail.com",
    phone: "+44 7342 274470",
    location: "United Arab Emirates"
  },
  color: "from-blue-500 to-indigo-600"
},
    {
      id: 3,
      name: "Priya Sharma",
      title: "Chief Marketing Officer",
      specialty: "Brand Strategy & Growth Marketing",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=500&fit=crop",
      bio: "Priya has transformed brands across industries with data-driven marketing strategies. She specializes in digital transformation and customer-centric storytelling.",
      achievements: [
        "Grew user base from 10K to 10M in 2 years",
        "Winner of CMO of the Year Award",
        "Published author on digital marketing"
      ],
      contact: {
        email: "priya.sharma@company.com",
        phone: "+1 (555) 345-6789",
        location: "London, UK"
      },
      color: "from-purple-500 to-pink-600"
    }
  ];

const openModal = (leader) => {
  setActiveProfile(leader);
};

const closeModal = () => {
  const tl = gsap.timeline({
    onComplete: () => setActiveProfile(null)
  });
  
  tl.to(modalRef.current, { y: '100%', opacity: 0, scale: 0.95, duration: 0.4, ease: 'power2.in' })
    .to(overlayRef.current, { opacity: 0, duration: 0.3 }, '<');
};

useEffect(() => {
  if (activeProfile && modalRef.current) {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Animate overlay
      gsap.set(overlayRef.current, { opacity: 0 });
      tl.to(overlayRef.current, { opacity: 1, duration: 0.3 });
      
      // Animate modal box
      gsap.set(modalRef.current, { y: '100%', opacity: 0, scale: 0.95 });
      tl.to(modalRef.current, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }, '<0.1');
      
      // Animate content elements
      tl.from('.modal-image', { opacity: 0, scale: 0.75, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3')
        .from('.modal-name', { opacity: 0, x: -20, duration: 0.5 }, '-=0.4')
        .from('.modal-title', { opacity: 0, x: -20, duration: 0.5 }, '-=0.4')
        .from('.modal-specialty', { opacity: 0, x: -20, duration: 0.5 }, '-=0.4')
        .from('.modal-about-heading', { opacity: 0, y: 20, duration: 0.4 }, '-=0.2')
        .from('.modal-about-text', { opacity: 0, y: 20, duration: 0.4 }, '-=0.3')
        .from('.modal-achievements-heading', { opacity: 0, y: 20, duration: 0.4 }, '-=0.2')
        .from('.modal-achievement', { opacity: 0, x: -20, stagger: 0.1, duration: 0.4 }, '-=0.2')
        .from('.modal-contact-heading', { opacity: 0, y: 20, duration: 0.4 }, '-=0.2')
        .from('.modal-contact-item', { opacity: 0, y: 20, stagger: 0.1, duration: 0.4 }, '-=0.2')
        .from('.modal-close-btn', { opacity: 0, scale: 0.75, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.6');
    }, modalRef);
    
    return () => ctx.revert();
  }
}, [activeProfile]);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div 
      className="min-h-screen relative bg-black"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-950/95 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center space-y-4">
              <div className="inline-block">
                <span className="text-blue-300 text-sm font-semibold tracking-widest uppercase">Meet Our Team</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Leadership That
                <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Drives Innovation
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-blue-100 text-base sm:text-lg">
                Exceptional leaders with diverse expertise, united by a shared vision to transform industries and create lasting impact.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                onClick={() => openModal(leader)}
                className="group relative bg-blue-950/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-900/50 hover:border-blue-600/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${leader.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${leader.color} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="relative w-20 h-20 rounded-xl object-cover ring-2 ring-blue-800 group-hover:ring-blue-600"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-1 truncate">{leader.name}</h3>
                      <p className="text-sm text-blue-200 mb-1">{leader.title}</p>
                      <p className="text-xs text-cyan-400 font-medium">{leader.specialty}</p>
                    </div>
                  </div>
                  
                  <p className="text-blue-100 text-sm line-clamp-3 mb-4">
                    {leader.bio}
                  </p>
                  
                  <button className="text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    View Full Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {activeProfile && (
         <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center  pt-40 justify-center p-4 bg-black/80 backdrop-blur-md ">
            <div ref={modalRef} className="relative bg-slate-900 w-full  max-w-3xl  max-h-[80vh] overflow-y-scroll no-scrollbar rounded-2xl border border-slate-800 shadow-2xl">
              {/* Header with gradient */}
              <div className={`relative bg-gradient-to-br ${activeProfile.color} p-8 sm:p-12`}>
               <button
  onClick={closeModal}
  className="modal-close-btn absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full"
>
  <X className="w-5 h-5 text-white" />
</button>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
  src={activeProfile.image}
  alt={activeProfile.name}
  className="modal-image w-32 h-32 rounded-2xl object-cover ring-4 ring-white/20"
/>
                 <div className="text-center sm:text-left text-white">
  <h2 className="modal-name text-3xl sm:text-4xl font-bold mb-2">{activeProfile.name}</h2>
  <p className="modal-title text-xl mb-2 text-white/90">{activeProfile.title}</p>
  <p className="modal-specialty text-sm text-white/80">{activeProfile.specialty}</p>
</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-8">
                {/* Bio */}
               <div>
  <h3 className="modal-about-heading text-xl font-bold text-white mb-3">About</h3>
  <p className="modal-about-text text-slate-400 leading-relaxed">{activeProfile.bio}</p>
</div>

                {/* Achievements */}
              <div>
  <h3 className="modal-achievements-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
    <Award className="w-5 h-5 text-blue-400" />
    Key Achievements
  </h3>
  <div className="space-y-3">
    {activeProfile.achievements.map((achievement, index) => (
      <div key={index} className="modal-achievement flex items-start gap-3">
        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${activeProfile.color} mt-2 flex-shrink-0`}></div>
        <p className="text-slate-400">{achievement}</p>
      </div>
    ))}
  </div>
</div>

                {/* Contact */}
<div className="border-t border-slate-800 pt-6">
  <h3 className="modal-contact-heading text-xl font-bold text-white mb-4">Get in Touch</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <a
        href={`mailto:${activeProfile.contact.email}`}
        className="modal-contact-item flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800"
      >
        <Mail className="w-5 h-5 text-blue-400" />
        <div className="min-w-0">
          <p className="text-xs text-slate-500">Email</p>
          <p className="text-sm text-slate-300 truncate">{activeProfile.contact.email.split('@')[0]}</p>
      </div>
    </a>
    
    <a
      href={`tel:${activeProfile.contact.phone}`}
      className="modal-contact-item flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800"
    >
      <Phone className="w-5 h-5 text-blue-400" />
      <div>
        <p className="text-xs text-slate-500">Phone</p>
        <p className="text-sm text-slate-300">{activeProfile.contact.phone}</p>
      </div>
    </a>
    <div className="modal-contact-item flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl">
      <MapPin className="w-5 h-5 text-blue-400" />
      <div>
        <p className="text-xs text-slate-500">Location</p>
        <p className="text-sm text-slate-300">{activeProfile.contact.location}</p>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>  
        )}

         {/* <div className={`mt-32 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  <div className="rounded-3xl p-12">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Our Mission
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                      We are a professional, enthusiastic and innovative team, dedicated to providing professional
                      Management Consulting Services and evolving people management that help our clients
                      become more productive and profitable.
                    </p>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex gap-2 items-center justify-center mx-auto">
                      Contact Us <ArrowRight />
                    </button>
                  </div>
                </div> */}
      </div>
    </div>
  );
};

export default LeadershipTeam;