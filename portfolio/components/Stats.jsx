"use client";
import CountUp from "react-countup";

const stats = [
    { number: 5, text: "Years of Experience" },
    { number: 10, text: "Projects Completed In The Last Year" },
    { number: 3, text: "Companies Worked" },
    { number: 100, text: "Code Commits" },
];

const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div>
                    {stats.map((item, index) => {
                        return (
                            <div key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl front-extrabold"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
