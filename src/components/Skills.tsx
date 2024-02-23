import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const styles = {
  path: {
    stroke: "#111111",
  },
  trail: {
    stroke: "#eeeeee",
  },
  text: {
    fill: "#111111",
    fontSize: "24px",
  },
};

const Skills = () => {
  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    let interval: number;

    if (inView) {
      interval = setInterval(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 80) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 40);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }

    return () => clearInterval(interval);
  }, [fullBody, inView, piercing, fullColor, temporary]);

  return (
    <section ref={ref} className="section font-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-y-12">
          <div className="w-[150px] lg:w-[275px]">
            <CircularProgressbar
              strokeWidth={1}
              value={fullBody}
              styles={styles}
              text={`${fullBody}%`}
            />
            <p className="uppercase font-light tracking-1.2px] text-center mt-8">
              Full Body Tattoo
            </p>
          </div>
          <div className="w-[150px] lg:w-[275px]">
            <CircularProgressbar
              strokeWidth={1}
              value={piercing}
              styles={styles}
              text={`${piercing}%`}
            />
            <p className="uppercase font-light tracking-1.2px] text-center mt-8">
              Safely Piercing
            </p>
          </div>
          <div className="w-[150px] lg:w-[275px]">
            <CircularProgressbar
              strokeWidth={1}
              value={fullColor}
              styles={styles}
              text={`${fullColor}%`}
            />
            <p className="uppercase font-light tracking-1.2px] text-center mt-8">
              Full Color Tattoo
            </p>
          </div>
          <div className="w-[150px] lg:w-[275px]">
            <CircularProgressbar
              strokeWidth={1}
              value={temporary}
              styles={styles}
              text={`${temporary}%`}
            />
            <p className="uppercase font-light tracking-1.2px] text-center mt-8">
              TemporaryTattoo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
