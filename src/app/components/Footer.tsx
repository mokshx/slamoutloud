import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#ff7b7b] pt-16 pb-12 md:pt-24 md:pb-16 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1400px] w-full flex flex-col gap-10 md:gap-16 text-black">
        {/* Top Section: Heading and Subheading */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-6xl sm:text-[80px] leading-[0.95] md:leading-[0.9] md:text-[140px] lg:text-[180px] font-bold tracking-tight break-words">
            Slam Out Loud.
          </h2>
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-[40px] font-medium text-black/70 leading-snug">
            “Every child will have a voice that enables them to change lives.”
          </p>
        </div>

        {/* Bottom Section: Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mt-4 md:mt-8">
          {/* Column 1: Info and Socials */}
          <div className="flex flex-col gap-6 md:gap-8 md:col-span-1 md:pr-4">
            <div className="text-black/70 text-base md:text-lg font-medium leading-relaxed">
              <p>FOUNDATION OF ARTS FOR SOCIAL CHANGE IN INDIA</p>
              <p>Innov8 CP2, 44, Backary Portion, 2nd Floor, Regal Building,</p>
              <p>New Delhi – 110001.</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/slamoutloud/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-black text-[#ff7b7b] rounded-full hover:bg-black/80 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/c/SlamOutLoud" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-black text-[#ff7b7b] rounded-full hover:bg-black/80 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3v6Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/slam-out-loud/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-black text-[#ff7b7b] rounded-full hover:bg-black/80 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Learn more */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-black">Learn more</h3>
            <ul className="flex flex-col gap-4 text-black/70">
              <li><Link href="/jijivisha" className="hover:text-black transition-colors text-base md:text-lg font-medium">The Jijivisha Fellowship</Link></li>
              <li><Link href="/afa" className="hover:text-black transition-colors text-base md:text-lg font-medium">Arts For All</Link></li>
              <li><Link href="/work-with-us" className="hover:text-black transition-colors text-base md:text-lg font-medium">Learning Resources</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-black">Support</h3>
            <ul className="flex flex-col gap-4 text-black/70">
              <li><Link href="/contact-us" className="hover:text-black transition-colors text-base md:text-lg font-medium">Contact</Link></li>
              <li><Link href="/work-with-us" className="hover:text-black transition-colors text-base md:text-lg font-medium">Join Team SOL</Link></li>
              <li><Link href="/privacy" className="hover:text-black transition-colors text-base md:text-lg font-medium">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Financials layout */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-black">Financials</h3>
            <ul className="flex flex-col gap-4 text-black/70">
              <li><a href="https://drive.google.com/file/d/1-COrW_HwzG5jUA1ICs6F0FrEcfY7Wi_k/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-base md:text-lg font-medium">FCRA Registration</a></li>
              <li><a href="https://drive.google.com/file/d/1paY4SleWiy8FnqkrvJvkgcTIIPqOVCvP/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-base md:text-lg font-medium">80G Certificate</a></li>
              <li><a href="https://drive.google.com/file/d/1H07HJdZ-ByThZpxCcaxzbGi_ST9PyFC6/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-base md:text-lg font-medium">12A Registration</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
