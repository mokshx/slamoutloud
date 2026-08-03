import Image from 'next/image';
import Counter from './Counter';
import StackedBarChart from './StackedBarChart';

export default function OurImpact() {
  const selBars = [
    {
      label: 'Agency',
      segments: [
        { label: '25% Growth', value: 26.64, color: '#ff8282' },
        { label: '50% Growth', value: 8.32, color: '#f8b661' },
        { label: '75% Growth', value: 1.33, color: '#36a295' },
      ],
    },
    {
      label: 'Curiosity',
      segments: [
        { label: '25% Growth', value: 15.05, color: '#ff8282' },
        { label: '50% Growth', value: 1.18, color: '#f8b661' },
      ],
    },
    {
      label: 'Imagination',
      segments: [
        { label: '25% Growth', value: 24.29, color: '#ff8282' },
        { label: '50% Growth', value: 2.47, color: '#f8b661' },
        { label: '75% Growth', value: 0.27, color: '#36a295' },
      ],
    },
  ];

  const climateBars = [
    {
      label: 'Appreciation of Nature',
      segments: [
        { label: '25% Growth', value: 35.14, color: '#ff8282' },
        { label: '50% Growth', value: 13.00, color: '#f8b661' },
        { label: '75% Growth', value: 1.54, color: '#36a295' },
      ],
    },
    {
      label: 'Local Sense of Environment',
      segments: [
        { label: '25% Growth', value: 24.78, color: '#ff8282' },
        { label: '50% Growth', value: 5.61, color: '#f8b661' },
        { label: '75% Growth', value: 0.21, color: '#36a295' },
      ],
    },
    {
      label: 'Personal Agency for Environment',
      segments: [
        { label: '25% Growth', value: 25.11, color: '#ff8282' },
        { label: '50% Growth', value: 4.72, color: '#f8b661' },
        { label: '75% Growth', value: 0.13, color: '#36a295' },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#fffcf5] py-16 md:py-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-16 md:gap-24">
        {/* Top Part: Text and Illustration */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Side: Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg md:max-w-xl aspect-square md:aspect-[4/3]">
              <Image
                src="/our_impact.png"
                alt="Illustration of children building skills step by step"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-12">
            {/* Top Text Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg md:text-xl font-bold text-black font-sans">
                Our Impact
              </h3>
              <p className="text-2xl md:text-[32px] md:leading-[1.2] text-gray-900 font-medium font-sans">
                Directly enabling students with SEL skills in government and low-income private schools across India
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-8">
              {/* Stat Box 1 */}
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-5xl md:text-6xl font-extrabold text-black font-sans tracking-tight">
                  <Counter value={700000} from={699950} suffix="+" duration={4} />
                </h2>
                <p className="text-sm md:text-base text-gray-800 font-sans leading-relaxed">
                  Students directly enabled with SEL skills across government and low-income private schools in India
                </p>
              </div>

              {/* Vertical Divider (Desktop) / Horizontal Divider (Mobile) */}
              <div className="hidden sm:block w-[2px] h-32 bg-black shrink-0 my-auto rounded-full"></div>
              <div className="block sm:hidden w-full h-[2px] bg-black/10 shrink-0 rounded-full"></div>

              {/* Stat Box 2 */}
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black font-sans tracking-tight">
                  5
                </h2>
                <p className="text-sm md:text-base text-gray-800 font-sans leading-relaxed">
                  States across India
                </p>
              </div>

              {/* Vertical Divider (Desktop) / Horizontal Divider (Mobile) */}
              <div className="hidden sm:block w-[2px] h-32 bg-black shrink-0 my-auto rounded-full"></div>
              <div className="block sm:hidden w-full h-[2px] bg-black/10 shrink-0 rounded-full"></div>

              {/* Stat Box 3 */}
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-black font-sans tracking-tight">
                  <Counter value={20} from={1} suffix="M" duration={2.5} />
                </h2>
                <p className="text-sm md:text-base text-gray-800 font-sans leading-relaxed">
                  Children reached through digital resources
                </p>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-black/10">
              {/* Metric 1 */}
              <div className="flex flex-col gap-1">
                <h2 className="text-4xl font-extrabold text-black font-sans tracking-tight">
                  38%
                </h2>
                <p className="text-sm text-gray-800 font-sans leading-relaxed">
                  Average growth in Future Readiness Skills
                </p>
                <p className="text-xs text-gray-500 font-sans">
                  Measured via competency-based assessments, not self-report (*24-25 TJF program)
                </p>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col gap-1">
                <h2 className="text-4xl font-extrabold text-black font-sans tracking-tight">
                  90.5
                </h2>
                <p className="text-sm text-gray-800 font-sans leading-relaxed">
                  Average Student NPS: children rating their SOL experience
                </p>
                <p className="text-xs text-gray-500 font-sans">
                  (*24-25 TJF program)
                </p>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col gap-1">
                <h2 className="text-4xl font-extrabold text-black font-sans tracking-tight">
                  80%
                </h2>
                <p className="text-sm text-gray-800 font-sans leading-relaxed">
                  of teachers report a reduction in classroom disruption due to behaviour issues
                </p>
                <p className="text-xs text-gray-500 font-sans">
                  (*24-25 Arts for All Abhivyakti program)
                </p>
              </div>

              {/* Metric 4 */}
              <div className="flex flex-col gap-1">
                <h2 className="text-4xl font-extrabold text-black font-sans tracking-tight">
                  81%
                </h2>
                <p className="text-sm text-gray-800 font-sans leading-relaxed">
                  of teachers report an increase in instructional time within classrooms
                </p>
                <p className="text-xs text-gray-500 font-sans">
                  (*24-25 Arts for All Abhivyakti program)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: Graphs */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16 w-full">
          {/* Graph 1 */}
          <div className="w-full md:w-1/2">
            <StackedBarChart
              title="Growth in SEL competencies"
              bars={selBars}
              yMax={40}
            />
          </div>

          {/* Graph 2 */}
          <div className="w-full md:w-1/2">
            <StackedBarChart
              title="Growth in climate competencies"
              bars={climateBars}
              yMax={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
