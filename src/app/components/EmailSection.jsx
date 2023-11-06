"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  // const [emailSubmitted, setEmailSubmitted] = useState(false);
  // const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');



// export default sendEmail;
  return (
    <section
      id="contact"
      className="grid max-w-5xl align-center md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
       
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/sindhueswar">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sindhu-t-e/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="mailto:sindhu20itr096.com">
            <Image src={MailIcon} alt="Mail Icon" />
          </Link>
        </div>
      </div>
      {/* <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abc@google.com"
                onChange={(e) => setSubject(e.target.value)}

              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
                onChange={(e) => setSubject(e.target.value)}

              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                onChange={(e) => setSubject(e.target.value)}

              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div> */}
    </section>
  );
};

export default EmailSection;



















// import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import Link from "next/link";
// import Image from "next/image";
// import nodemailer from 'nodemailer';

// const EmailSection = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Implement your email sending logic here using 'nodemailer' or your preferred email service.
//       // Example:
//       const transporter = nodemailer.createTransport({
//         // Configure your email service here
//       });

//       const mailOptions = {
//         from: 'your-email@example.com',
//         to: email,
//         subject: subject,
//         text: message,
//       };

//       await transporter.sendMail(mailOptions);

//       setEmailSubmitted(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid max-w-5xl align-center md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">
//           Let&apos;s Connect
//         </h5>
//         <div className="socials flex flex-row gap-2">
//           <Link href="https://github.com/sindhueswar">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="https://www.linkedin.com/in/sindhu-t-e/">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : (
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="abc@google.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Let's talk about..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmailSection;
