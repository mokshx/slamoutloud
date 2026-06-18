import Image from "next/image";

export default function WhyExist() {
  return (
    <section className="bg-[#ff7b7b] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-black">
        <h2 className="text-2xl font-bold mb-12">Why we exist</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 — Origin story */}
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed">
              In 2014, our co-founder Jigyasa watched children move through
              school in silence, rarely given real space to feel, imagine, or
              create.
            </p>
            <p className="text-lg leading-relaxed">
              A spoken-word poetry workshop in Kashmir changed everything. What
              poured out was undeniable.
            </p>
            <div className="relative w-full aspect-[4/3] mt-4 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about/why_we_exist.png"
                alt="That moment became Slam Out Loud"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 2 — Our Beginnings */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Our Beginnings</h3>
            <p className="text-lg leading-relaxed">
              Slam Out Loud began in classrooms.
            </p>
            <p className="text-lg leading-relaxed">
              Our co-founders were full-time teachers in low-income communities,
              where children came to school every day carrying questions, dreams,
              fears, and stories that rarely found space inside the classroom.
            </p>
            <p className="text-lg leading-relaxed">
              Alongside teaching, we began bringing the arts into our classroom
              and taking spoken-word poetry workshops to children across India.
              The 77th workshop, in Kashmir, changed everything.
            </p>
            <p className="text-lg leading-relaxed">
              In a classroom shaped by conflict, children were invited to choose
              an emotion and write. We expected joy, friendship, and small
              memories of childhood. Instead, children wrote about hate, sadness,
              confusion, guilt, fear, and hope.
            </p>
            <p className="text-lg leading-relaxed">
              This day solidified our belief that, for students, spaces for
              creative expression were necessary, not a nice-to-have, and Slam
              Out Loud became an organization.
            </p>
          </div>

          {/* Column 3 — What We Discovered */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">What We Discovered</h3>
            <p className="text-lg leading-relaxed">
              We discovered that expression is not ornamental. In fact, it is
              foundational to learning, identity, and becoming.
            </p>
            <p className="text-lg leading-relaxed">
              We had seen how often children were asked to leave parts of
              themselves at the school gate: their language, culture, identity,
              emotions, and imagination. School expected them to listen,
              remember, and answer correctly, but rarely invited them to create,
              question, or be fully seen.
            </p>
            <p className="text-lg leading-relaxed">
              Every time a child created something original, something shifted.
            </p>
            <p className="text-lg leading-relaxed">
              We realised that when children are given structured spaces to
              create, perform, question and discover, they begin to see
              themselves differently. They build the belief that their
              circumstances are not their ceiling. They begin to say: &ldquo;My
              voice matters, my story matters, and I belong in bigger
              rooms.&rdquo;
            </p>
          </div>
        </div>

        {/* Our Commitment — full-width section below the columns */}
        <div className="mt-16 pt-12 border-t border-black/20">
          <h3 className="text-xl font-bold mb-8">Our Commitment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — pull quote */}
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-bold leading-snug">
                We believe every child deserves the capacities to flourish, not
                just the chance to complete school.
              </p>
              <p className="text-lg leading-relaxed">
                We learn directly from students and teachers, then partner with
                state governments to embed what works into curriculum, training,
                and measurement.
              </p>
            </div>
            {/* Right — supporting paragraphs */}
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed">
                By building this foundation at ages 7–14, when identity is still
                forming, we are engineering the conditions for a different kind
                of life.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment is to bring this kind of learning to children who
                are too often denied it.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in creating a world for ALL of our children, in which,
                as Sir Ken Robinson said, &ldquo;Creativity is as important as
                literacy.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
