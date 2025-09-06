import { Github, Facebook, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

type Developer = {
    name: string;
    title: string;
    image: string;
    skills?: string[];
    github?: string;
    facebook?: string;
    linkedin?: string;
};

const developers: Developer[] = [
    {
        name: "Md Habibullah",
        title: "Founder & Initial Developer",
        image: `https://avatars.githubusercontent.com/u/149287500?v=4` + ".png",
        github: "https://github.com/md8-habibullah",
        facebook: "https://facebook.com/md8.habibullah",
        linkedin: "https://linkedin.com/in/your-profile",
    },
    {
        name: "Riazul Hasan Rocky",
        title: "Logo & Technical Support",
        image: "https://avatars.githubusercontent.com/u/134952141?v=4" + ".png",
        github: "hhttps://github.com/riazulrocky",
        facebook: "https://www.facebook.com/riazulrocky2",
        linkedin: "https://linkedin.com/in/your-rocky-profile",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
    }),
};

const Developers = () => {
    useEffect(() => {
        const vooo = document.getElementById('developers');
        if (vooo) {
            vooo.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <Navigation />
            <div id="developers" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-3xl font-bold mb-12 text-center">Project Developers</h1>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {developers.map((dev, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                        >
                            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <img
                                        src={dev.image}
                                        alt={dev.name}
                                        className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-border"
                                    />
                                    <h2 className="text-xl font-semibold">{dev.name}</h2>
                                    <p className="text-sm text-muted-foreground mb-3">{dev.title}</p>

                                    {/* Social links */}
                                    <div className="flex space-x-3">
                                        {dev.github && (
                                            <a href={dev.github} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" variant="ghost" className="h-9 w-9 p-0 hover:text-foreground">
                                                    <Github className="h-4 w-4" />
                                                </Button>
                                            </a>
                                        )}
                                        {dev.facebook && (
                                            <a href={dev.facebook} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" variant="ghost" className="h-9 w-9 p-0 hover:text-foreground">
                                                    <Facebook className="h-4 w-4" />
                                                </Button>
                                            </a>
                                        )}
                                        {dev.linkedin && (
                                            <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" variant="ghost" className="h-9 w-9 p-0 hover:text-foreground">
                                                    <Linkedin className="h-4 w-4" />
                                                </Button>
                                            </a>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Developers;
