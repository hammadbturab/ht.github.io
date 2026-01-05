import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "How Solar Panels Work: A Complete Guide for Australian Homeowners",
    excerpt: "Understanding the science behind solar energy and how it can power your Perth home efficiently year-round.",
    date: "December 28, 2024",
    readTime: "5 min read",
    category: "Education",
  },
  {
    title: "2025 Solar Rebates and Incentives in Western Australia",
    excerpt: "Everything you need to know about government rebates, STCs, and financial incentives available for WA residents.",
    date: "December 20, 2024",
    readTime: "7 min read",
    category: "Finance",
  },
  {
    title: "Maximizing Your Solar Investment: Tips for Perth Weather",
    excerpt: "Expert advice on optimizing your solar panel performance throughout Perth's unique seasonal conditions.",
    date: "December 15, 2024",
    readTime: "4 min read",
    category: "Tips",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Solar Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-gradient-solar">News & Guides</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay informed with the latest solar industry news, tips, and educational content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
