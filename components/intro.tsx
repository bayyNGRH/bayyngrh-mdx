import Image from "next/image";
import authorImage from "@/public/images/authors/authorImage.png";

export default function Intro() {
    return (
        <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center">
            <div className="mt-2 flex-1 md:mt-0">
                <h1 className="title no-underline">Hey, I&#39;m Bayu.</h1>
                <p className="mt-3 font-light text-muted-foreground">
                    I&#39;m a Bali based digital marketer and also a web developer with a focus on building tailored
                    online experiences for businesses, particularly in hospitality and branding. I&#39;m continually
                    exploring new technologies, and I&#39;m dedicated to sharing knowledge to help clients and peers
                    grow.
                </p>
            </div>
            <div className="relative">
                <Image
                    className="flex-1 rounded-lg grayscale"
                    src={authorImage}
                    alt="Bayu Nugraha"
                    width={175}
                    height={175}
                    priority
                />
            </div>
        </section>
    );
}
