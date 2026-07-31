import { Container } from "@/components/shared/Container";

const VIDEOS = [
  {
    id: "video1",
    youtubeId: "ZQ_c2q8FcFc",
    title: "iPhone Unboxing & Review",
  },
  {
    id: "video2",
    youtubeId: "V3VQ0GzMPqE",
    title: "Galaxy S23 Ultra Camera Test",
  },
  {
    id: "video3",
    youtubeId: "fGX1mFhX3uY",
    title: "Redmi Note 13 Pro Unboxing",
  },
];

export function VideoSection() {
  return (
    <section id="videos" className="scroll-mt-24 py-16">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="text-balance text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            ডিভাইস রিভিউ ও আনবক্সিং
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-muted sm:text-base">
            কেনার আগে আমাদের ভিডিও রিভিউ দেখে নিশ্চিন্ত হোন — বাস্তব অভিজ্ঞতা,
            বাস্তব পরীক্ষা।
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video) => (
            <figure key={video.id} className="glass-card overflow-hidden">
              <div className="relative aspect-video w-full bg-slate-100">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-semibold text-ink">
                {video.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
