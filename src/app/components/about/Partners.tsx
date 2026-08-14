import Image from "next/image";

const testimonials = [
  {
    quote: [
      "Our partnership with Slam Out Loud is rooted in a shared belief that every young person deserves the space to be heard, to create, and to thrive.",
      "While we are early in this journey together, we\u2019ve been inspired by SOL's joy-filled, dignity-first approach and its commitment to inclusion in the communities it serves.",
      "We love that they combine imagination with rigour, showing what's possible when creativity is treated as essential, not optional.",
    ],
    logo: "/about/godrej.png",
    name: "Omar Momin,",
    role: "Head, Godrej Foundation",
  },
  {
    quote: [
      "We share a belief in the power of storytelling to change narratives, alter paths, and shift mindsets, particularly in contexts where structural inequities limit whose voices are heard.",
      "Slam Out Loud's approach to strengthening adolescents' confidence and self-expression resonates deeply with Girl Rising, and our longstanding association reflects our shared conviction that creative expression is essential to advancing agency and opportunity for young people.",
    ],
    logo: "/about/girl_rising.png",
    name: "Nidhi Shukla,",
    role: "Co-CEO, Girl Rising",
  },
];

export default function Partners() {
  return (
    <section className="bg-[#FFFDF3] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-16 text-black uppercase tracking-tight">
          What Our Partners Have To Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-0 items-start">
          {/* Godrej Testimonial */}
          <div className="md:pr-12">
            <div className="space-y-6">
              {testimonials[0].quote.map((para, idx) => (
                <p key={idx} className="text-lg md:text-xl text-black leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4">
              <div className="relative w-24 h-24">
                <Image
                  src={testimonials[0].logo}
                  alt="Godrej Foundation"
                  fill
                  sizes="96px"
                  className="object-contain object-left"
                />
              </div>
              <div>
                <p className="font-bold text-lg text-black">{testimonials[0].name}</p>
                <p className="text-gray-700">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] bg-black self-stretch mx-12"></div>

          {/* Girl Rising Testimonial */}
          <div className="md:pl-12">
            <div className="space-y-6">
              {testimonials[1].quote.map((para, idx) => (
                <p key={idx} className="text-lg md:text-xl text-black leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4">
              <div className="relative w-24 h-24">
                <Image
                  src={testimonials[1].logo}
                  alt="Girl Rising"
                  fill
                  sizes="96px"
                  className="object-contain object-left"
                />
              </div>
              <div>
                <p className="font-bold text-lg text-black">{testimonials[1].name}</p>
                <p className="text-gray-700">{testimonials[1].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
