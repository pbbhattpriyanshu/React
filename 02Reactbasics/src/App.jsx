import JobCard from "./Components/JobCard";

function App() {
  const post = [
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh21MUQIJJhr55Hi8v4WoGKBYycrUvo-94hQ&s",
      comp_name: "Amazon",
      posted: "5 days ago",
      title: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Remote",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrlaPTiDvfC24xZP2MdareGEoNxolGAKWEw&s",
      comp_name: "Google",
      posted: "2 days ago",
      title: "Software Development Engineer II",
      tag1: "Full Time",
      tag2: "Hybrid",
      salary: "$95k–$140k",
      location: "Bangalore, India",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBbX7DlSXAJ3bBp94DzmfL97YGj9c4Km-hw&s",
      comp_name: "Netflix",
      posted: "10 days ago",
      title: "Frontend Developer",
      tag1: "Contract",
      tag2: "Remote",
      salary: "$80/hr",
      location: "Delhi, India",
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSpLYf0aniXNzloMgsPb6-ln-uAmDCYRdmw&s",
      comp_name: "Microsoft",
      posted: "1 day ago",
      title: "Cloud Security Analyst",
      tag1: "Full Time",
      tag2: "On-site",
      salary: "$110k/year",
      location: "Hyderabad, India",
    },
    {
      pic: "https://cdn-icons-png.flaticon.com/256/11865/11865338.png",
      comp_name: "OpenAI",
      posted: "7 days ago",
      title: "AI Research Intern",
      tag1: "Internship",
      tag2: "Remote",
      salary: "$45/hr",
      location: "Pune, India",
    },
    {
  pic: "https://logowik.com/content/uploads/images/tcs-tata-consultancy-services2792.logowik.com.webp",
  comp_name: "TCS",
  posted: "3 days ago",
  title: "Backend Java Developer",
  tag1: "Full Time",
  tag2: "On-site",
  salary: "₹12–20 LPA",
  location: "Kolkata, India",
},
{
  pic: "https://cdn.iconscout.com/icon/free/png-256/free-infosys-logo-icon-svg-download-png-2370783.png",
  comp_name: "Infosys",
  posted: "6 days ago",
  title: "Data Analyst",
  tag1: "Full Time",
  tag2: "Hybrid",
  salary: "₹9–14 LPA",
  location: "Chennai, India",
},
{
  pic: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  comp_name: "Wipro",
  posted: "4 days ago",
  title: "DevOps Engineer",
  tag1: "Full Time",
  tag2: "On-site",
  salary: "₹10–18 LPA",
  location: "Pune, India",
},
{
  pic: "https://cdn-icons-png.flaticon.com/256/5969/5969019.png",
  comp_name: "Asus",
  posted: "9 days ago",
  title: "Automation Tester",
  tag1: "Contract",
  tag2: "Remote",
  salary: "₹700/hr",
  location: "Noida, India",
},
{
  pic: "https://cdn-icons-png.flaticon.com/256/5969/5969038.png",
  comp_name: "IBM",
  posted: "1 day ago",
  title: "Full Stack Developer",
  tag1: "Full Time",
  tag2: "Hybrid",
  salary: "₹13–22 LPA",
  location: "Bangalore, India",
},
{
  pic: "https://cdn-icons-png.flaticon.com/256/5969/5969032.png",
  comp_name: "Reliance Jio",
  posted: "8 days ago",
  title: "Cloud Infrastructure Engineer",
  tag1: "Full Time",
  tag2: "On-site",
  salary: "₹14–25 LPA",
  location: "Mumbai, India",
},
{
  pic: "https://cdn-icons-png.flaticon.com/256/5969/5969035.png",
  comp_name: "WhatsApp",
  posted: "5 days ago",
  title: "Product Designer",
  tag1: "Full Time",
  tag2: "Remote",
  salary: "₹80k–₹1.2L/month",
  location: "Bangalore, India",
},
{
  pic: "https://i.pinimg.com/736x/36/76/4c/36764cad429d97090de6e08a7ef82c7b.jpg",
  comp_name: "Zoho",
  posted: "2 days ago",
  title: "Frontend Engineer",
  tag1: "Full Time",
  tag2: "On-site",
  salary: "₹10–18 LPA",
  location: "Chennai, India",
}

  ];

  return (
    <>
      <h1>Welcome, Job Opening</h1>
      <div className="container">
        {post.map((job, index) => (
          <JobCard
            key={index}
            pic={job.pic}
            comp_name={job.comp_name}
            posted={job.posted}
            title={job.title}
            tag1={job.tag1}
            tag2={job.tag2}
            salary={job.salary}
            location={job.location}
          />
        ))}
      </div>
    </>
  );
}

export default App;
