import { EDUCATION } from '../constants/index'; // Assuming you have data for education
import { TracingBeam } from '../components/ui/TracingBeam'; // Adjust the import path accordingly
import { GoDotFill } from 'react-icons/go';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Education</h2>
        <TracingBeam className="px-6">
          <div className="relative">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className="flex mb-12 animate-fadeInRight"
              >
                <div className="w-1/4 pr-8 text-right">
                  <div className="text-lg font-semibold text-white">{edu.start_date ? `${edu.start_date} - ${edu.end_date}` : `${edu.end_date}`}</div>
                </div>
                <div className="relative w-3/4 pl-8 border-l-2 border-gray-300">
                  <div className="absolute top-0 left-0 w-[25px] h-5 text-2xl text-green-600 transform -translate-x-1/2 -translate-y-1/2">
                    <GoDotFill />
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-bold">{edu.title}</h3>
                    <p className="text-lg">{edu.course}</p>
                    <p>{edu.branch}</p>
                    <p>{edu.start_date ? `${edu.start_date} - ${edu.end_date}` : `Graduated: ${edu.end_date}`}</p>
                    {edu.gpa && <p>GPA: {edu.gpa}</p>}
                    {edu.percentage && <p>Percentage: {edu.percentage}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}

export default Education;
