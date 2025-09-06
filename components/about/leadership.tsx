"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Linkedin, GraduationCap, Calendar, Users, Award, Target, X, MapPin, Phone, Globe, Star, Sparkles } from "lucide-react"

const executiveTeam = [
  {
    name: "Kanchan Kumar Mandal",
    role: "Founder & Executive Director",
    image: "/k.jpg",
    bio: "Leading HAPEF's mission with 15+ years in rural development and agricultural innovation.",
    email: "rajesh@hapef.org",
    linkedin: "#",
    expertise: ["Rural Development", "Agricultural Innovation", "Community Leadership"],
  },
  {
    name: "Priya Sharma",
    role: "Program Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Overseeing program implementation and community engagement across all HAPEF initiatives.",
    email: "priya@hapef.org",
    linkedin: "#",
    expertise: ["Program Management", "Community Engagement", "Strategic Planning"],
  },
  {
    name: "Amit Ghosh",
    role: "Community Relations Head",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Building strong relationships with local communities and stakeholder partnerships.",
    email: "amit@hapef.org",
    linkedin: "#",
    expertise: ["Community Relations", "Stakeholder Management", "Partnership Development"],
  },
  {
    name: "Dr. Sunita Devi",
    role: "Agricultural Specialist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in sustainable farming practices and climate-resilient agriculture techniques.",
    email: "sunita@hapef.org",
    linkedin: "#",
    expertise: ["Sustainable Agriculture", "Climate Resilience", "Farmer Training"],
  },
]

const boardMembers = [
  {
    name: "Bappa Mridha",
    role: "Founder & Director",
    designation: "Founder & Director",
    image: "/bappa.jpg",
    bio: "Visionary leader driving HAPEF's mission to transform rural communities through sustainable development and innovative solutions.",
    details: `Bappa Mridha is the Founder and Director of HAPEF. He holds a Master’s degree in Agriculture and Rural Development from the Ramakrishna Mission Vivekananda Educational and Research Institute, and is currently pursuing a Master of Social Work from IGNOU. With over five years of experience in the livelihood and regenerative agriculture sectors, his expertise includes smallholder agriculture, entrepreneurship, natural resource management, and the formation of farmer collectives for agri-value chain integration. He is currently associated with PRADAN and has previously contributed to various CSR initiatives and government development projects.`,
    email: "bappa@hapef.org",
    linkedin: "#",
    experience: "Rural Development Pioneer",
    specialization: "Community Empowerment & Leadership",
  },
  {
    name: "Annyesha Purkait",
    role: "Co-founder & Director",
    designation: "Co-founder & Director",
    image: "/ann.jpg",
    bio: "Co-founder & Director with experience spanning government and non-profit sectors.",
    details: `Annyesha Purkait is the Co-founder and Director of HAPEF. She is currently working as a Young Professional at the National Institute of Disaster Management (NIDM), Ministry of Home Affairs, Government of India. She holds a Master’s degree in Environment and Disaster Management from the Ramakrishna Mission Vivekananda Educational and Research Institute and is presently pursuing a Master of Social Work from IGNOU. With over three years of hands-on experience across both government and non-profit sectors, she has worked extensively on project coordination, training design and delivery, stakeholder engagement and disaster risk reduction & environmental advocacy. She was previously associated with SwitchON Foundation, where she built clean air networks and before that with Sarva Seva Samity Sanstha (4S India), where she oversaw multi-state operations.`,
    email: "annyesha@hapef.org",
    linkedin: "#",
    experience: "Program Development, DRR, Environmental Advocacy",
    specialization: "Stakeholder Engagement & Training",
  },
  {
    name: "Sourav Bhanja",
    role: "Co-founder & Director",
    designation: "Co-founder & Director",
    image: "/sourav.jpg",
    bio: "Dedicated to building sustainable agricultural programs and fostering community partnerships for lasting impact.",
    details: `Sourav Bhanja is the Co-founder and Director of HAPEF. He holds a Bachelor's degree in Civil Engineering. With experience in implementing sustainable development projects, his expertise includes watershed development, rainwater conservation, and community-based livelihood enhancement. He is currently working on the Jharkhand Jalchhajan Yojana, a watershed development initiative, across 20 villages in the Khunti block of Khunti district, Jharkhand. Previously, Sourav worked as a Block Coordinator in a welfare project under PRADAN.`,
    email: "sourav@hapef.org",
    linkedin: "#",
    experience: "Agricultural Development Specialist",
    specialization: "Sustainable Agriculture & Partnerships",
  },
  {
    name: "Bapi Mridha",
    role: "Co-founder & Director",
    designation: "Co-founder & Director",
    image: "/bapi.jpg",
    bio: "Co-founder and Director of HAPEF, dedicated to transforming the agricultural landscape.",
    details: `Bapi Mridha, Co-founder and Director of HAPEF, is a visionary leader dedicated to transforming the agricultural landscape. He holds a Diploma degree in Agriculture Science and Management from the University of Kalyani and is currently pursuing a Master of Social Work from IGNOU, further enhancing his expertise in creating sustainable impact. With extensive experience in livelihood and regenerative agriculture sectors, he has  expertise in smallholder agriculture, entrepreneurship, climate-resilient agriculture, and farmer collective formation. Currently, he is associated with PRADAN, driving innovative solutions to empower rural communities.`,
    email: "bapi@hapef.org",
    linkedin: "#",
    experience: "Entrepreneurship Development Leader",
    specialization: "Skill Development & Innovation",
  },
  {
    name: "Twinkle Mukherjee",
    role: "Co-founder & Director",
    designation: "Co-founder & Director",
    image: "/placeholder.jpg",
    bio: "Passionate advocate for women empowerment and community development through sustainable livelihood programs.",
    email: "twinkle@hapef.org",
    linkedin: "#",
    experience: "Women Empowerment Advocate",
    specialization: "Community Development & Gender Equality",
  },
]

const advisoryBoard = [
  {
    name: "Dr. Bikash Ghosh",
    role: "Agricultural Research Advisor",
    institution: "Former Director, ICAR",
    image: "/Bikash.jpg",
    bio: "Renowned horticulturist and retired professor.",
    details: `Dr. Bikash Ghosh is an Advisory Member of HAPEF. He is a renowned horticulturist and retired Professor from the Department of Fruits and Orchard Management at Bidhan Chandra Krishi Viswavidyalaya, West Bengal. With over four decades of experience in academics, research, and fieldwork, he has made significant contributions to fruit crop husbandry, particularly in mango, citrus, guava, litchi, and ber. He has mentored numerous M.Sc. and Ph.D. scholars and has published more than 40 research papers in reputed journals. Dr. Ghosh has led and collaborated on major projects funded by ICAR, DBT, and the Department of Food Processing Industries and Horticulture. His work on orchard rejuvenation, crop regulation, and organic nutrition has had a lasting impact on both the scientific community and farming practices. He has represented India at international symposia in countries including Indonesia, Portugal, China, and Thailand. Dr. Ghosh has actively contributed to academic collaboration with Bangladesh by presenting a paper at an international symposium in Maymensingh in 2009 and serving as an external Ph.D. thesis evaluator for Khulna University in 2016. He continues to advise academic institutions, serve as a thesis examiner, and contribute actively to national horticultural development initiatives.`,
    email: "sk.mishra@hapef.org",
    linkedin: "#",
    expertise: ["Agricultural Research", "Innovation Strategy", "Technology Transfer"],
    achievements: "50+ Research Publications, National Agriculture Award",
  },
  {
    name: "Dr. Lavanya Sravani Balguri",
    role: "Agricultural Entomology Advisor",
    institution: "Advisory Member, HAPEF (Ph.D., BCKV, West Bengal)",
    image: "/l.jpg",
    bio: "Expert in eco-friendly pest management and biocontrol.",
    details: `Dr. Lavanya Sravani Balguri is an advisory member of HAPEF. She holds a doctoral degree in Agricultural Entomology from Bidhan Chandra Krishi Viswavidyalaya (BCKV), West Bengal. Her expertise spans several key areas, including eco-friendly stored grain pest management, ecological pest management of chilli, insect rearing and biocontrol agent production, fruit fly mass production, and honeybee rearing and handling. During her Master's degree at Central Agricultural University, Imphal, she was awarded the University Gold Medal. Dr. Balguri has also contributed to academia as a part-time lecturer at the Susurijo Institute of Agricultural Science, Technology and Management in West Bengal and RNB Global University in Rajasthan. A life member of the Society for Biocontrol Advancement, she has received numerous honors for her contributions to Agricultural Entomology. In 2019, she was awarded the Birth Anniversary Celebration Award for Distinction in the Study of Agriculture by the Maharaja Narasingh Memorial Committee, Imphal. Dr. Balguri's commitment to her field is further demonstrated by her extensive publications, including articles and book chapters, as well as her active participation in conferences, workshops, and training programs.`,
    expertise: [
      "Eco-friendly Stored Grain Pest Management",
      "Ecological Pest Management (Chilli)",
      "Insect Rearing & Biocontrol Production"
    ],
    achievements: "University Gold Medal; Honors in Agricultural Entomology; Extensive publications",
  },
  {
    name: "Mr. Ajay Gupta",
    role: "Advisory Board Member",
    institution: "HAPEF Advisory Board",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Advisory board member supporting strategic initiatives and partnerships.",
    email: "",
    linkedin: "#",
    expertise: ["Strategy", "Governance", "Partnerships"],
    achievements: "Leadership across development initiatives",
  },
  {
    name: "Dr. Gourango Majumder",
    role: "Technology & Innovation Advisor",
    institution: "IIT Delhi, Computer Science",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Technology expert helping integrate digital solutions for rural development and agricultural innovation.",
    email: "gourango@hapef.org",
    linkedin: "#",
    expertise: ["Digital Innovation", "AgriTech", "Data Analytics"],
    achievements: "Tech Innovation Award, 15+ Patents",
  },
  {
    name: "Dr. Kalyan Bhattacharya",
    role: "Financial Strategy Advisor",
    institution: "Former CFO, Rural Development Bank",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Financial strategist with extensive experience in rural finance and microfinance operations.",
    email: "kalyan@hapef.org",
    linkedin: "#",
    expertise: ["Rural Finance", "Microfinance", "Impact Investment"],
    achievements: "Banking Excellence Award, Rural Finance Pioneer",
  },
]

const interns = [
  {
    name: "Jhuma Ghosh Nandi",
    role: "Development Internship Trainee",
    university: "B.Com (Accounts Hons), MBA (Finance); pursuing MSW (Child and Women Development)",
    duration: "6 months",
    image: "/ju.jpg",
    bio: "Development Internship Trainee at HAPEF; 20+ years' experience across accounting, finance, taxation, budgeting, procurement, and audit.",
    details: `Jhuma Ghosh Nandi is the Development Internship Trainee at HAPEF. She holds B.Com (Accounts Hons), MBA (Finance) degree. Now she is studying for MSW on Child and Women Development. She has completed short term certification courses from National Institute of Financial Management-Faridabad , Administrative Staff College of India-Hyderabad and National Institute of Rural Development and Panchayati Raj-Hyderabad.

She is now working in an organisation under the Panchayats & Rural Development Department, Govt. of WB. Jhuma is specialised on accounting, financial management, taxation, budget, procurement and audit related issues. She is also a trainer in State Level. Jhuma is proficient in tally, pfms, MS office, ommas, e-office, google sheet etc.

With over 20 years, she has  experienced with different scheme/project/program viz. Pradhan Mantri Gram Sadak Yojana (PMGSY), Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS), Self Help Group (SHG), Department For International Development(DFID) under UK govt. funded project, Rashtriya Gram Swaraj Abhiyan (RGSA) etc. She has  experienced with Rayners College London, UK.`,
    email: "",
    linkedin: "#",
    focus: ["Accounting", "Financial Management", "Taxation", "Budgeting", "Procurement", "Audit", "Training"],
    startDate: "January 2024",
  },
  {
    name: "Nikita Karmakar",
    role: "Development Internship Trainee (Full-stack Developer)",
    university: "Netaji Subhash Engineering College (Garia)",
    duration: "4 months",
    image: "/nikita.jpg",
    bio: "",
    details: `Nikita Karmakar is the Development Internship Trainee (Full-stack Developer) at HAPEF. She holds a B.Tech in Computer Science & Engineering from Netaji Subhash Engineering College (Garia). Nikita's expertise includes programming languages like Java, JavaScript, and Python, as well as front-end and back-end development frameworks. She's proficient in databases like MongoDB and MySQL, and tools like Git, GitHub, and Docker. Nikita also has knowledge of machine learning with TensorFlow and OpenCV. With strong analytical and collaboration skills, she handles website designing, content creation, and documentation, leveraging her technical skills to drive innovation and adaptability in her role.`,
    email: "nikita.intern@hapef.org",
    linkedin: "#",
    focus: ["JavaScript", "React", "Node.js", "MongoDB", "MySQL"],
    startDate: "February 2024",
  },
  {
    name: "Sunandini Das",
    role: "Development Internship Trainee",
    university: "Presidency University, Kolkata",
    duration: "3 months",
    image: "/s.jpg",
    bio: "Sociology student skilled in qualitative and quantitative research, data analysis, and social impact reporting.",
    details: `Sunandini Das is a highly motivated Sociology student currently pursuing a Bachelor of Arts from Presidency University, Kolkata. Her academic coursework has provided her with strong skills in qualitative and quantitative research, data analysis, and report writing. She is proficient in tools such as MS Word, Excel, SPSS, and PowerPoint. Previously, Sunandini worked with orphanages and old age homes to identify their needs, collected and analyzed data for project evaluation, prepared social impact reports, and contributed to developing community support programs. Sunandini has also published a paper in Narthaki titled "The use of Mudras in Odissi dance: A symbolic language of expression and spirituality". Her strong research skills are further demonstrated through her BA dissertation, "Constraints of Tradition: Odissi Dance and Pedagogy". In addition to her research work, she was a core committee member of the Presidency University Dance Forum and the Eastern Dance Society, where she organized events and managed teams, demonstrating leadership skills.`,
    email: "priyanka.intern@hapef.org",
    linkedin: "#",
    focus: ["Qualitative Research", "Quantitative Research", "Data Analysis"],
    startDate: "March 2024",
  },
  {
    name: "Arjun Patel",
    role: "Digital Marketing Intern",
    university: "Jadavpur University",
    duration: "6 months",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Communications student developing digital strategies to amplify HAPEF's impact and reach.",
    details: `Develops digital strategies and content to amplify HAPEF’s impact; supports campaigns, analytics, and outreach.`,
    email: "arjun.intern@hapef.org",
    linkedin: "#",
    focus: ["Digital Marketing", "Content Strategy", "Social Media Management"],
    startDate: "January 2024",
  },
  {
    name: "Ananya Sen",
    role: "Data & Impact Analysis Intern",
    university: "University of Calcutta",
    duration: "5 months",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Analyzes program data and builds dashboards to track outcomes and drive decision-making.",
    email: "ananya.intern@hapef.org",
    linkedin: "#",
    focus: ["Data Analysis", "Dashboards", "Impact Measurement"],
    startDate: "April 2024",
  }
]

export function Leadership() {
  const [selectedMember, setSelectedMember] = useState(null)

  const openMemberDetails = (member) => {
    setSelectedMember(member)
  }

  const closeMemberDetails = () => {
    setSelectedMember(null)
  }

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-8 shadow-lg">
            <Sparkles className="h-6 w-6 text-blue-600 animate-pulse" />
            <span className="text-blue-800 font-semibold text-lg">Meet Our Leaders</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-gray-900">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-x">
              Leadership
            </span>
            <span className="text-gray-900"> Team</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the visionary leaders and dedicated professionals who guide HAPEF's mission to transform rural communities through sustainable development and innovative solutions.
          </p>
        </div>

        {/* Executive Leadership Team */}
        <div id="executive-team" className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full mb-6">
              <Star className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-medium">Executive Leadership</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Core Leadership
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our executive team driving day-to-day operations and strategic initiatives with passion and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                onClick={() => openMemberDetails(member)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-emerald-600 p-1 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{member.name}</h4>
                    <p className="text-green-600 font-semibold mb-3 text-sm uppercase tracking-wide">{member.role}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                        <Badge key={skillIndex} className="bg-green-100 text-green-700 hover:bg-green-200 text-xs px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                      {member.expertise.length > 2 && (
                        <Badge className="bg-gray-100 text-gray-600 text-xs px-3 py-1">
                          +{member.expertise.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-2 bg-transparent border-green-200 hover:bg-green-50 hover:border-green-300 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `mailto:${member.email}`
                      }}
                    >
                      <Mail className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-2 bg-transparent border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(member.linkedin, '_blank')
                      }}
                    >
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    </Button>
                  </div>

                  {/* Click indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">👁</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Board of Directors */}
        <div id="board-directors" className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full mb-6">
              <Award className="h-5 w-5 text-blue-600" />
              <span className="text-blue-800 font-medium">Board of Directors</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Strategic Governance
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic oversight and governance leadership ensuring organizational excellence and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {boardMembers.map((member, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                onClick={() => openMemberDetails(member)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="relative mb-6">
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 p-1 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>

                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">{member.name}</h4>
                    <p className="text-blue-600 font-semibold mb-2 text-xs uppercase tracking-wide">{member.role}</p>
                  </div>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Award className="h-3 w-3 mr-1 text-blue-500" />
                      <span className="line-clamp-1">{member.experience}</span>
                    </div>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Target className="h-3 w-3 mr-1 text-indigo-500" />
                      <span className="line-clamp-1">{member.specialization}</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-1 bg-transparent border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 px-3 py-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = `mailto:${member.email}`
                      }}
                    >
                      <Mail className="h-3 w-3 text-blue-600" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-1 bg-transparent border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 px-3 py-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(member.linkedin, '_blank')
                      }}
                    >
                      <Linkedin className="h-3 w-3 text-indigo-600" />
                    </Button>
                  </div>

                  {/* Click indicator */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">👁</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div id="advisory-board" className="mb-20 scroll-mt-28">
          <div className="text-center mb-12 relative">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-purple-50/90 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 shadow-md mb-6">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700 tracking-wider uppercase">Advisory Board</span>
              <Star className="h-4 w-4 text-purple-500" />
            </div>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-rose-600 drop-shadow-sm mb-4">
              Advisory Board
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert advisors providing strategic guidance and specialized knowledge
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></span>
              <span className="w-2 h-2 rounded-full bg-purple-500/70 shadow-md"></span>
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {advisoryBoard.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white hover:scale-105 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600 p-1">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-white cursor-pointer"
                        onClick={() => openMemberDetails(member)}
                      />
                    </div>

                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-purple-600 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.institution}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center mb-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email {member.name}</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn {member.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Interns */}
        <div id="interns" className="mb-20 scroll-mt-28">
          <div className="text-center mb-12 relative">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-orange-50/90 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-200 shadow-md mb-6">
              <Sparkles className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700 tracking-wider uppercase">Our Interns</span>
              <Users className="h-4 w-4 text-orange-500" />
            </div>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-amber-600 to-rose-600 drop-shadow-sm mb-4">
              Our Interns
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented young professionals bringing fresh perspectives and innovative ideas
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></span>
              <span className="w-2 h-2 rounded-full bg-orange-500/70 shadow-md"></span>
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {interns.map((intern, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-white opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 p-1">
                      <img
                        src={intern.image || "/placeholder.svg"}
                        alt={intern.name}
                        className="w-full h-full rounded-full object-cover bg-white cursor-pointer"
                        onClick={() => openMemberDetails(intern)}
                      />
                    </div>

                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{intern.name}</h4>
                    <p className="text-orange-600 font-medium mb-1">{intern.role}</p>
                    <p className="text-sm text-gray-500 mb-1">{intern.university}</p>
                    <p className="text-xs text-gray-400 mb-3">{intern.duration}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center mb-2">
                      {intern.focus.map((area, areaIndex) => (
                        <Badge key={areaIndex} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      Started: {intern.startDate}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email {intern.name}</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn {intern.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Notable Interns */}
        <div id="notable-interns" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Notable Interns</h3>
            <p className="text-lg text-gray-600">
              Exceptional individuals who have made significant contributions to our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Research & Development Intern",
                university: "IIT Kharagpur",
                duration: "8 months",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Led innovative research in sustainable agriculture techniques, contributing to our climate-resilient farming programs.",
                email: "rajesh.notable@hapef.org",
                linkedin: "#",
                focus: ["Agricultural Innovation", "Research Methodology", "Climate Adaptation"],
                achievements: "Published 2 research papers, Developed new farming technique",
                startDate: "June 2023",
              },
              {
                name: "Priya Sharma",
                role: "Community Engagement Intern",
                university: "JNU Delhi",
                duration: "6 months",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Spearheaded community outreach programs, establishing partnerships with 15+ local organizations.",
                email: "priya.notable@hapef.org",
                linkedin: "#",
                focus: ["Community Relations", "Partnership Development", "Social Impact"],
                achievements: "15+ partnerships established, Community impact award",
                startDate: "August 2023",
              },
              {
                name: "Amit Ghosh",
                role: "Digital Innovation Intern",
                university: "ISI Kolkata",
                duration: "7 months",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Developed digital solutions for rural communities, creating mobile apps for farmer education and support.",
                email: "amit.notable@hapef.org",
                linkedin: "#",
                focus: ["Digital Solutions", "Mobile Development", "Rural Technology"],
                achievements: "3 mobile apps developed, Tech innovation recognition",
                startDate: "July 2023",
              },
            ].map((intern, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-white"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600 p-1">
                      <img
                        src={intern.image || "/placeholder.svg"}
                        alt={intern.name}
                        className="w-full h-full rounded-full object-cover bg-white cursor-pointer"
                        onClick={() => openMemberDetails(intern)}
                      />
                    </div>

                  </div>

                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{intern.name}</h4>
                    <p className="text-emerald-600 font-medium mb-1">{intern.role}</p>
                    <p className="text-sm text-gray-500 mb-1">{intern.university}</p>
                    <p className="text-xs text-gray-400 mb-3">{intern.duration}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center mb-2">
                      {intern.focus.map((area, areaIndex) => (
                        <Badge key={areaIndex} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-center text-emerald-600 font-medium mb-2">
                      <Award className="h-3 w-3 inline mr-1" />
                      {intern.achievements}
                    </div>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      Started: {intern.startDate}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email {intern.name}</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn {intern.name}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Internship Program CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Join Our Internship Program</h3>
            <p className="text-xl mb-8 opacity-90">
              Are you passionate about rural development and social impact? Join our dynamic team and gain hands-on
              experience in creating meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                <GraduationCap className="mr-2 h-5 w-5" />
                Apply for Internship
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                Learn About Our Programs
              </Button>
            </div>
          </div>
        </div>
      {/* Member Details Modal */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => { if (!open) closeMemberDetails() }}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl border border-transparent bg-white/90 backdrop-blur-xl shadow-2xl ring-1 ring-black/5">
          {/* Decorative gradient glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -right-16 h-56 w-56 bg-gradient-to-tr from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-2xl rounded-full" />
            <div className="absolute -bottom-12 -left-12 h-56 w-56 bg-gradient-to-tr from-emerald-400/20 via-blue-400/20 to-teal-400/20 blur-2xl rounded-full" />
          </div>

          {/* Close button */}
          <button
            aria-label="Close"
            onClick={closeMemberDetails}
            className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:outline-none"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Photo & quick actions */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-indigo-500/30 blur-lg" />
                <div className="relative w-44 h-44 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
                  <img
                    src={(selectedMember?.image as string) || "/placeholder.jpg"}
                    alt={(selectedMember?.name as string) || "Member"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>


            </div>

            {/* Details */}
            <div className="md:col-span-2 p-8">
              <DialogHeader>
                <DialogTitle className="text-3xl font-extrabold tracking-tight">
                  <span className="text-gray-900">{selectedMember?.name}</span>
                </DialogTitle>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                    {(selectedMember as any)?.role || (selectedMember as any)?.designation}
                  </span>
                </div>
              </DialogHeader>

              <div className="mt-5">
                <p className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-line">
                  {(selectedMember as any)?.details || selectedMember?.bio}
                </p>
              </div>

              {/* Expertise or Specialization */}
              {Array.isArray((selectedMember as any)?.expertise) && (
                <div className="mt-6">
                  <p className="text-xs font-medium text-gray-500 mb-2">Areas of Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {(selectedMember as any).expertise.map((skill: string, idx: number) => (
                      <Badge key={idx} className="bg-blue-100 text-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {(!(selectedMember as any)?.expertise && ((selectedMember as any)?.experience || (selectedMember as any)?.specialization)) && (
                <div className="mt-6 space-y-2 text-sm text-gray-700">
                  {(selectedMember as any)?.experience && (
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{(selectedMember as any).experience}</span>
                    </div>
                  )}
                  {(selectedMember as any)?.specialization && (
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-indigo-500 mr-2" />
                      <span>{(selectedMember as any).specialization}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Divider */}
              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

              {/* Secondary quick actions removed per request */}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      </div>
    </section>
  )
}

export default Leadership
