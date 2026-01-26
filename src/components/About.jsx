import { Calendar, MapPin, Award, GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DURATION = 2000;

const education = [
  {
    id: 1,
    side: "left",
    year: "2023 – 2026",
    title: "B.E. Electronic & Computer Engineering",
    place: "PES Modern College of Engineering, Pune",
    meta: ["2023 – 2026", "Pune, India", "CGPA: 8.67"],
    icon: GraduationCap,
  },
  {
    id: 2,
    side: "right",
    year: "2020 – 2023",
    title: "Diploma in Information Technology",
    place: "Government Polytechnic, Kolhapur",
    meta: ["2020 – 2023", "Kolhapur, India", "87.18%"],
    icon: Award,
  },
  {
    id: 3,
    side: "left",
    year: "2020",
    title: "SSC (10th)",
    place: "Shri Shardchandraji High School",
    meta: ["2020", "Kolhapur, India", "94.60%"],
    icon: Award,
  },
];

export default function EducationJourney() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && startAnimation(),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    let start = null;

    const animate = (time) => {
      if (!start) start = time;
      const value = Math.min((time - start) / DURATION, 1);
      setProgress(value);

      education.forEach((item, i) => {
        if (value >= (i + 1) / education.length) {
          setVisible((v) => ({ ...v, [item.id]: true }));
        }
      });

      if (value < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <section ref={sectionRef} className="edu">
      <div className="header">
        <h2 className="edu-heading">
          Education <span className="journey-text">Journey</span>
        </h2>
        <p className="subtitle">
          My academic progression through the years
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline">
          {/* Timeline line */}
          <div className="line">
            <div
              className="progress"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {education.map((item, index) => {
            const Icon = item.icon;
            // Reduced spacing between timeline items
            const top = `${15 + (index * 30)}%`;

            return (
              <div key={item.id}>
                {/* Knot */}
                <div
                  className={`knot ${visible[item.id] ? "active" : ""}`}
                  style={{ top }}
                >
                  <div className="knot-inner">
                    <Icon size={14} color="#fff" />
                  </div>
                  <span className="year-label">{item.year}</span>
                </div>

                {/* Card */}
                <div
                  className={`card ${item.side} ${
                    visible[item.id] ? "show" : ""
                  }`}
                  style={{ top }}
                >
                  <div className="card-header">
                    <div className="icon-container">
                      <Icon size={18} color="#fff" />
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <p className="place">{item.place}</p>

                  <div className="meta">
                    <span className="meta-item">
                      <Calendar size={14} />
                      {item.meta[0]}
                    </span>
                    <span className="meta-item">
                      <MapPin size={14} />
                      {item.meta[1]}
                    </span>
                    <span className="meta-item">
                      <Award size={14} />
                      {item.meta[2]}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .edu {
          padding: 3rem 1rem 6rem;
          background: linear-gradient(135deg, #fff9f5 0%, #fff5f0 100%);
          position: relative;
          overflow: hidden;
          min-height: auto;
        }

        .edu::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff6b35, #ff8c42, #ffb997);
        }

        .header {
          text-align: center;
          margin-bottom: 2.5rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .edu-heading {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
          position: relative;
          display: inline-block;
        }

        .journey-text {
          color: #ff6b35;
          position: relative;
        }

        .journey-text::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #ff6b35, #ff8c42);
          border-radius: 2px;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.5;
          max-width: 500px;
          margin: 0 auto;
        }

        .timeline-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }

        .timeline {
          position: relative;
          height: 550px;
          margin-top: -1rem;
        }

        .line {
          position: absolute;
          left: 50%;
          top: 40px;
          height: calc(100% - 80px);
          width: 2px;
          background: rgba(255, 107, 53, 0.15);
          transform: translateX(-50%);
          border-radius: 3px;
        }

        .progress {
          width: 100%;
          background: linear-gradient(to bottom, #ff6b35, #ff8c42, #ffb997);
          transition: height 0.15s ease-out;
          border-radius: 3px;
        }

        .knot {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .knot-inner {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b35, #ff8c42);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 3px 8px rgba(255, 107, 53, 0.3),
            0 0 0 4px #fff9f5,
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .year-label {
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #ff6b35;
          white-space: nowrap;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.1);
        }

        .knot.active {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .knot.active .knot-inner {
          box-shadow: 
            0 4px 12px rgba(255, 107, 53, 0.4),
            0 0 0 4px #fff9f5,
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .card {
          position: absolute;
          width: 360px;
          background: white;
          padding: 1.5rem;
          border-radius: 14px;
          border: 1px solid rgba(255, 107, 53, 0.1);
          box-shadow: 
            0 6px 24px rgba(255, 107, 53, 0.08),
            0 2px 6px rgba(0, 0, 0, 0.04);
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff6b35, #ff8c42);
          border-radius: 14px 14px 0 0;
        }

        .card.left {
          right: calc(50% + 50px);
        }

        .card.right {
          left: calc(50% + 50px);
        }

        .card.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .icon-container {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, #ff6b35, #ff8c42);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.3;
          margin: 0;
        }

        .place {
          color: #666;
          font-size: 0.9rem;
          margin: 0.5rem 0 1rem;
          line-height: 1.4;
          padding-left: 0.5rem;
          border-left: 2px solid rgba(255, 107, 53, 0.2);
        }

        .meta {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #555;
        }

        .meta-item svg {
          color: #ff6b35;
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .card {
            width: 320px;
          }
        }

        @media (max-width: 900px) {
          .timeline {
            height: 500px;
            margin-top: 0;
          }

          .line {
            left: 25px;
            top: 40px;
            height: calc(100% - 80px);
          }

          .knot {
            left: 25px;
          }

          .card {
            position: relative;
            left: 60px !important;
            right: auto !important;
            width: calc(100% - 85px);
            margin-bottom: 2.5rem;
            transform: translateX(0) scale(0.95);
          }

          .card.show {
            transform: translateX(0) scale(1);
          }

          .year-label {
            top: 35px;
            left: 60px;
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          .edu {
            padding: 2.5rem 1rem 3rem;
          }

          .edu-heading {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
            padding: 0 0.5rem;
          }

          .timeline {
            height: 450px;
          }

          .card {
            padding: 1.25rem;
            width: calc(100% - 70px);
            left: 50px !important;
            margin-bottom: 2rem;
          }

          .card h3 {
            font-size: 1rem;
          }

          .card-header {
            gap: 0.5rem;
          }

          .icon-container {
            width: 32px;
            height: 32px;
          }

          .meta-item {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .edu {
            padding: 2rem 1rem 2.5rem;
          }

          .timeline {
            height: 400px;
          }

          .line {
            left: 20px;
          }

          .knot {
            left: 20px;
          }

          .knot-inner {
            width: 28px;
            height: 28px;
          }

          .card {
            left: 45px !important;
            width: calc(100% - 60px);
            padding: 1rem;
          }

          .year-label {
            left: 50px;
            padding: 3px 10px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}