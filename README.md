# DentaNova Studio

Absolutely. For a premium dentist website, I recommend a soft white + medical aqua + sky blue + deep navy theme. It will look clean, trustworthy, modern, and will work especially well with your 3D animations.

I would use the following exact color system:

Primary: #2BB8D6 — modern dental aqua

Primary Dark: #1689A5 — buttons/hover

Secondary: #8DDEEA — soft cyan

Accent: #B8F0E5 — mint

Background: #F6FCFD — very light medical background

White: #FFFFFF

Dark Text: #123047 — premium navy

Secondary Text: #607D8B

Border: #DCEFF2

Soft Blue: #E5F8FC

Soft Mint: #E8FAF6

Glass Background: rgba(255,255,255,0.70)

And importantly, each major section should have a short description underneath its heading, so the website doesn't just show headings and cards. The descriptions should be professional, concise, and dental-clinic focused.

Here is the revised prompt you can give Lovable:

Create a premium, modern, highly interactive, animated and 3D-inspired Dentist Clinic website using React.js with Vite. The website should look like a professionally designed premium dental clinic website, not a generic medical template. The first impression must be extremely attractive and should immediately communicate trust, advanced dental technology, professional doctors, patient comfort and beautiful smiles. The design should be light, clean, elegant, spacious and luxurious, with the dentist/doctor being one of the strongest visual elements of the website. Use React.js, Vite, React Router, Framer Motion for animations and, where useful, Three.js/React Three Fiber for selected 3D elements. If a full 3D model is not available, create convincing 3D effects using CSS transforms, perspective, shadows, gradients, glassmorphism, parallax and Framer Motion.

Use the brand name DentaNova Dental Studio and tagline “A Brighter Smile. A Better You.” The visual identity should communicate premium dental care, advanced technology, gentle treatment and confidence. Use a carefully designed light medical-luxury color palette throughout the entire website. The primary brand color should be Aqua Blue #2BB8D6, representing cleanliness, freshness, modern dentistry and technology. Use Deep Aqua #1689A5 for darker buttons, active states and hover states. Use Soft Cyan #8DDEEA for decorative elements and subtle gradients. Use Mint #B8F0E5 as a secondary healthcare accent. The primary website background should be Very Light Medical #F6FCFD, with Pure White #FFFFFF used for cards, sections and content areas. Use Soft Blue #E5F8FC for highlighted backgrounds and Soft Mint #E8FAF6 for selected feature areas. Main headings and important text should use Deep Navy #123047, while secondary text should use Slate Gray #607D8B. Borders should use Light Aqua Gray #DCEFF2. For glassmorphism elements use a translucent white such as rgba(255,255,255,0.70) with backdrop blur. Use these colors consistently and do not introduce random colors. The overall appearance should be approximately 70% white/light backgrounds, 15% aqua/blue elements, 10% navy text and 5% mint/soft decorative accents. Avoid heavy dark backgrounds, bright neon colors and overly saturated gradients.

Use elegant gradients based only on this color palette, such as white to very-light-blue, soft cyan to white, and aqua to soft cyan. For example, hero backgrounds can use a subtle gradient from #FFFFFF to #E5F8FC, technology sections can use #F6FCFD to #E8FAF6, and buttons can use #2BB8D6 to #1689A5. Use shadows such as soft blue-gray shadows rather than harsh black shadows. The 3D objects should use white, aqua, cyan and subtle navy accents so that the entire website remains consistent.

The project architecture should be simple and clean. Do not create separate folders for every component or every page. Keep all reusable components directly inside the components folder and keep all pages directly inside the pages folder. For example, use src/components/Navbar.jsx, src/components/Navbar.css, src/components/Footer.jsx, src/components/Footer.css, src/components/Hero.jsx, src/components/Hero.css, src/components/ServiceCard.jsx, src/components/ServiceCard.css, src/components/DoctorCard.jsx, src/components/DoctorCard.css, src/components/TestimonialCard.jsx, src/components/TestimonialCard.css, src/components/AppointmentForm.jsx, src/components/AppointmentForm.css, src/components/BeforeAfter.jsx, src/components/BeforeAfter.css, src/components/FloatingButtons.jsx, src/components/FloatingButtons.css, src/components/FAQ.jsx, src/components/FAQ.css and other reusable components directly under components. Similarly, use src/pages/Home.jsx, src/pages/Home.css, src/pages/About.jsx, src/pages/About.css, src/pages/Services.jsx, src/pages/Services.css, src/pages/Doctors.jsx, src/pages/Doctors.css, src/pages/DoctorDetails.jsx, src/pages/DoctorDetails.css, src/pages/Appointment.jsx, src/pages/Appointment.css, src/pages/Gallery.jsx, src/pages/Gallery.css, src/pages/Blog.jsx, src/pages/Blog.css, src/pages/BlogDetails.jsx, src/pages/BlogDetails.css, src/pages/Contact.jsx, src/pages/Contact.css and src/pages/NotFound.jsx, src/pages/NotFound.css. Do not create folders such as components/Navbar/Navbar.jsx or pages/Home/Home.jsx.

Every component and every page must have its own external CSS file. Import the corresponding CSS file inside the JSX file. Do not put large CSS sections directly inside JSX and do not use excessive inline styles. Keep index.css for the global reset, body styles, font configuration, CSS variables, global typography and reusable global styles. Individual page and component designs must remain inside their own external CSS files.

The navbar should be premium, minimal and elegant. Display the DentaNova logo on the left, navigation links such as Home, About, Services, Doctors, Gallery, Blog and Contact, and a prominent Book Appointment button using the primary Aqua Blue color. The navbar should initially blend naturally with the hero and then become a white glassmorphism navbar when the user scrolls. Add a subtle backdrop blur, thin #DCEFF2 border and soft shadow. On mobile, show a clean animated hamburger icon and a smooth mobile navigation drawer. Navigation links should have a subtle aqua animated underline on hover.

The Home page must be the most visually impressive page. The hero should contain a large premium heading such as “Your Smile Deserves Exceptional Care.” Under the heading, add a meaningful description: “Experience advanced dentistry designed around your comfort, confidence and long-term oral health, delivered by experienced dental professionals using modern technology.” Add a small badge saying “Advanced Dental Care”, followed by two buttons, “Book an Appointment →” and “Explore Services →”. The primary appointment button should use #2BB8D6, transition toward #1689A5 on hover and have a soft shadow. The secondary button should use a white background with an aqua border and aqua text.

On the right side of the hero, display a professional, friendly and trustworthy dentist/doctor image. The doctor should be the main visual attraction. Create a sophisticated 3D composition around the doctor with floating glass cards, a dental tooth element, rating card, experience card, small dental icons, soft glowing aqua circles, subtle gradient blobs and layered shadows. The doctor image should appear to float above the background using perspective, shadow and depth. Add subtle mouse-based parallax so the doctor and decorative objects move at different speeds as the user moves the mouse. Do not make the animation excessive. The visual should feel like a premium healthcare technology website.

Under the hero, create a trust statistics section with 15+ Years Experience, 10K+ Happy Patients, 25K+ Successful Treatments and 4.9/5 Patient Rating. Add a small section description under the statistics heading such as “Trusted by thousands of patients for comfortable, advanced and personalized dental care.” Animate the numbers smoothly when the section enters the viewport. Use white cards with very subtle aqua borders and soft shadows.

Create a Services section with the heading “Complete Dental Care Under One Roof” and place this description directly below the heading: “From preventive care to complete smile transformations, our dental team provides personalized treatments using modern techniques and advanced technology.” Create attractive reusable service cards for General Dentistry, Cosmetic Dentistry, Dental Implants, Teeth Whitening, Orthodontics, Root Canal Treatment, Pediatric Dentistry and Emergency Dental Care. Each card should contain an icon, title, short description, Learn More button and animated arrow. Use white backgrounds, #DCEFF2 borders, soft shadows and subtle aqua gradients. On hover, the card should move slightly upward, the icon should animate, the shadow should become deeper and a soft aqua glow should appear.

Create a premium dental technology section with the heading “Technology That Makes Dentistry Better” and description “Modern technology allows us to diagnose accurately, plan treatments intelligently and provide a more comfortable experience for every patient.” Show a central 3D tooth or dental model surrounded by floating cards for Digital X-Ray, 3D Dental Scanning, AI-Assisted Diagnostics and Advanced Dental Imaging. Use the primary aqua and soft cyan colors for the 3D object and floating cards. The object should gently rotate or float while the cards move subtly around it. This should be one of the main 3D visual highlights of the website.

Create an About section with the heading “Where Technology Meets Compassionate Care” and description “We combine experienced dental professionals, advanced equipment and a patient-first approach to make every dental visit comfortable, transparent and personalized.” Display a professional clinic or dentist image on one side and detailed content on the other. Add feature points such as experienced professionals, modern equipment, personalized treatment and hygienic environment. Include a doctor profile such as Dr. Aarav Mehta — Chief Dental Surgeon. Use scroll reveal animations where the image and content smoothly enter the screen.

Create a Why Choose Us section with the heading “Why Patients Choose DentaNova” and description “From your first consultation to your final treatment, every part of your experience is designed around safety, comfort, technology and exceptional care.” Create six premium cards for Experienced Dentists, Advanced Technology, Pain-Free Approach, Personalized Treatment, Hygienic Environment and Emergency Support. Use clean line icons with aqua accents, white cards, subtle borders and elegant 3D hover effects.

Create a dedicated Doctors page with the heading “Meet Our Dental Experts” and description “Our experienced dental professionals combine clinical expertise, advanced technology and a gentle approach to help every patient achieve a healthier, more confident smile.” Display multiple doctors with professional images, name, specialty, qualification, experience, rating, availability and View Profile/Book Appointment buttons. Store doctors inside src/data/doctors.js and render them dynamically.

Create a dynamic Doctor Details page using React Router. When a visitor clicks a doctor, navigate to a route such as /doctors/dr-aarav-mehta. The page should show the doctor's large image, name, specialty, qualification, experience, biography, treatments, working hours, patient reviews and appointment CTA. Use an elegant profile layout with white cards, soft aqua backgrounds and animated content.

Create a Services page with the heading “Advanced Dental Treatments for Every Smile” and description “Explore our complete range of dental services designed to protect your oral health, restore function and create a smile you feel confident sharing.” Display all services in a responsive grid. Each service should have its own attractive visual identity while still using the same color system. Create dynamic service details where appropriate.

Create an Appointment page with the heading “Book Your Visit With Confidence” and description “Tell us what you need and our team will help you find the right treatment, doctor and appointment time for your dental care.” Create a premium appointment form with Full Name, Email, Phone Number, Date, Preferred Time, Doctor, Service and Message. Add validation and a beautiful animated success state after submission. Place clinic contact information and opening hours in a glassmorphism card beside the form.

Create a Before and After section with the heading “Real Smiles. Real Transformations.” and description “See how personalized dental treatments can transform smiles while maintaining a natural and confident appearance.” Create an interactive draggable before/after comparison slider for Teeth Whitening, Smile Design, Dental Implants and Cosmetic Dentistry. Use smooth animations and rounded image containers.

Create a Testimonials section with the heading “What Our Patients Say” and description “Thousands of patients trust DentaNova for professional dental care, comfortable treatments and a better overall experience.” Create an animated testimonial carousel with patient image, name, treatment, star rating and review. Use white cards with subtle aqua borders and elegant shadows.

Create a Gallery page with the heading “Inside DentaNova Dental Studio” and description “Take a look at our modern clinic, advanced technology, experienced team and real smile transformations.” Create an attractive responsive gallery with categories such as Clinic, Doctors, Treatments, Technology and Smiles. Clicking an image should open an animated lightbox with a smooth zoom effect.

Create a Blog page with the heading “Dental Care Insights” and description “Simple, practical and expert-backed advice to help you maintain a healthy smile and make informed dental care decisions.” Create blog cards containing image, category, title, description, date, author and Read More button. Store blog content in src/data/blogs.js. Create a dynamic Blog Details page using React Router.

Create an FAQ section with the heading “Frequently Asked Questions” and description “Find quick answers to some of the most common questions about dental treatments, appointments and oral health.” Use an elegant animated accordion. Questions should include how often patients should visit the dentist, whether teeth whitening is safe, whether dental implants are painful, how long a root canal takes and whether emergency dental care is available. Store the questions in src/data/faq.js.

Create a Contact page with the heading “We’re Here for Your Smile” and description “Have a question, need guidance or want to schedule a visit? Our team is ready to help you take the next step toward better dental health.” Include address, phone, email, opening hours and a contact form. Add a map/location section using a suitable placeholder if an actual map API is unavailable.

Add floating WhatsApp, Call and Book Appointment buttons on the website. These should use the same aqua color palette, have subtle pulse animations and display labels on hover. On mobile, make sure these buttons remain accessible without covering important content.

Create a premium footer with DentaNova Dental Studio branding, a short description, Quick Links, Dental Services, Contact Information, Opening Hours and Social Media links. Maintain the light premium design language but use slightly deeper navy/aqua areas to create visual separation. Include the copyright text “© 2026 DentaNova Dental Studio. All Rights Reserved.”

Throughout the website, use section headings followed by a short professional description. Do not create sections that only contain a heading and cards without explaining the purpose of the section. Descriptions should generally be one or two sentences and should be visually smaller than the heading using #607D8B or a similar secondary text color.

The animation style must be sophisticated and premium. Use Framer Motion for fade-ins, slide-ins, staggered animations, viewport-triggered reveals, smooth page transitions, floating objects, button interactions and card hover effects. Use subtle 3D transforms including perspective, rotateX, rotateY, translateZ and scale. Cards may have a very subtle 3D tilt on hover. Hero objects should gently float. Avoid excessive bouncing or flashy animations. The animation should make visitors feel that the website is alive while still maintaining the professionalism expected from a medical clinic.

Use modern typography such as Poppins, Inter or Manrope. Headings should use Deep Navy #123047, primary buttons should use Aqua #2BB8D6, hover buttons should transition toward Deep Aqua #1689A5, secondary backgrounds should use #E5F8FC or #E8FAF6, normal page backgrounds should use #F6FCFD, cards should generally use #FFFFFF, borders should use #DCEFF2, and secondary text should use #607D8B. Maintain excellent contrast and readability.

Make the website fully responsive for large desktop screens, laptops, tablets and mobile devices. Ensure there is no horizontal scrolling. On mobile, stack content naturally, make buttons touch-friendly, resize typography correctly, simplify complex 3D effects when necessary and keep animations smooth. The website should look excellent at 1920px, 1440px, 1024px, 768px, 480px and 375px widths.

Use semantic HTML, accessible buttons, proper heading hierarchy, meaningful alt text, keyboard-friendly interactions and visible focus states. Optimize images and animations for performance. Lazy-load images where appropriate and avoid unnecessary rendering. Keep the code clean, reusable and maintainable.

Use separate data files such as src/data/services.js, src/data/doctors.js, src/data/testimonials.js, src/data/blogs.js and src/data/faq.js. Repeated content such as services, doctors, testimonials, blogs and FAQs must be rendered dynamically using .map() rather than duplicating JSX. Create reusable components and pass data using props.

Use React Router for routes including Home, About, Services, Service Details, Doctors, Doctor Details, Appointment, Gallery, Testimonials, Blog, Blog Details, Contact and NotFound. Make navigation smooth and ensure every page has a polished entrance animation.

The final website should look like a premium dental technology brand rather than a standard clinic website. The strongest visual priorities should be the dentist in the hero, beautiful smile imagery, the light aqua medical color palette, 3D depth, glassmorphism, smooth animations, modern typography, trust-building information and an extremely clear appointment booking experience. Every section should have a clear purpose, a strong heading and a short descriptive paragraph underneath it. The overall result should be elegant, luxurious, trustworthy, modern, animated and memorable enough that a dentist would be proud to use it as their official clinic website.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://denta-nova-glow.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a8bdc2b6-a5b7-4cdb-a057-c75ba138fd52).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
