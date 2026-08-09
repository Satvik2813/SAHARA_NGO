import { stories } from "@/data/stories";
import { Picture } from "@/components/Picture";
import { Button } from "@/components/Button";

export function FeaturedStory() {
  const story = stories[0];
  return (
    <section className="py-16 sm:py-20 bg-paper">
      <div className="container-page grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="rounded-lg overflow-hidden">
          <Picture src={story.image} alt="" className="w-full aspect-[4/5] object-cover" />
        </div>
        <div>
          <p className="eyebrow mb-2">Stories of change</p>
          <h2 className="text-3xl sm:text-4xl mb-4">{story.title}</h2>
          <p className="text-ink-muted text-lg mb-6 max-w-prose">{story.body}</p>
          <div className="flex flex-wrap gap-3">
            <Button to="/stories" variant="secondary">
              Read more stories
            </Button>
            <Button to="/donate#sponsor-child" variant="primary">
              Sponsor a child
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
