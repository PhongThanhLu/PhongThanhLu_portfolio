import Image from "next/image"

export const EXPERIENCE_TIMELINE = [
  {
  title: "2025",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
        Joined <strong>FragsAI</strong> as an AI/ML Intern, building intelligent video processing systems and contributing to real-world AI solutions.
      </p>
      <ul className="list-disc pl-5 text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-6">
        <li>Engineered a scalable video processing pipeline using Python, NumPy, and Pandas, reducing memory use by 45% and speeding up analysis.</li>
        <li>Enhanced a clip extraction model using TensorFlow and Roboflow, achieving 25% higher accuracy and 20% faster results.</li>
        <li>Developed RESTful APIs for seamless integration, boosting deployment speed by 30%.</li>
      </ul>
      <div className="flex flex-wrap gap-2 items-center">
        <Image src="/python.svg" alt="Python" width={50} height={50} className="h-15 w-15" />
        <Image src="/numpy.svg" alt="NumPy" width={24} height={24} className="h-15 w-15" />
        <Image src="/opencv.svg" alt="OpenCV" width={24} height={24} className="h-15 w-15" />
        <Image src="/pandas.svg" alt="Pandas" width={24} height={24} className="h-15 w-15" />
        <Image src="/tensorflow.svg" alt="TensorFlow" width={24} height={24} className="h-15 w-15" />
        <Image src="/Roboflow.svg" alt="Roboflow" width={24} height={24} className="h-15 w-15" />
        <Image src = "/nodejs-icon.svg" alt = "Node.js" width={24} height={24} className="h-15 w-15" />
        <Image src = "/postgresql.svg" alt = "Express.js" width={24} height={24} className="h-15 w-15" />
      </div>
    </div> 
  )
},
{
  title: "2024",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
      Participate in <strong>USF Robotics Perception and Action Lab</strong> as a Research Assistant — my first hands-on experience in a professional research environment — where I worked on robotics-focused backend systems and data automation.

      </p>
      <ul className="list-disc pl-5 text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-6">
        <li>Enhanced a video chunking API using FastAPI, Pandas, OpenCV, and NumPy to automate splitting large videos into clips from Excel timeline data, achieving 99% accuracy and reducing processing time by 40%.</li>
        <li>Developed a backend feature with Flask to auto-detect the first clap using signal processing, achieving 90% accuracy and reducing synchronization time by 70% for precise alignment of video and Empatica sensor data.</li>
        <li>Built a robust backend function with Node.js and Express.js to fetch and handle data from the Fitbit API endpoint, improving data integration efficiency and ensuring reliable downstream processing.</li>
      </ul>
      <div className="flex flex-wrap gap-2 items-center">
      <Image src="/python.svg" alt="Python" width={50} height={50} className="h-15 w-15" />
        <Image src="/numpy.svg" alt="NumPy" width={24} height={24} className="h-15 w-15" />
        <Image src="/opencv.svg" alt="OpenCV" width={24} height={24} className="h-15 w-15" />
        <Image src="/pandas.svg" alt="Pandas" width={24} height={24} className="h-15 w-15" />
        <Image src = "/nodejs-icon.svg" alt = "Node.js" width={24} height={24} className="h-15 w-15" />
        
        <Image src = "/fastapi.svg" alt = "FastAPI" width={24} height={24} className="h-15 w-15" />
      </div>
    </div> 
  )
}


]
