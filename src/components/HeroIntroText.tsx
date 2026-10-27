import React from 'react';

/**
 * Placeholder content for the text section directly below the Hero introduction.
 * Edit or replace these paragraphs with your personal writing anytime.
 */
export const heroIntroParagraphs: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula donec lobortis risus a elit.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque nec magna facilisis pellentesque pellentesque habitant morbi tristique senectus."
];

export const HeroIntroText: React.FC = () => {
  return (
    <section
      aria-label="Introduction overview"
      className="relative w-full px-6 sm:px-12 md:pl-28 lg:pl-36 md:pr-48 lg:pr-56 pt-6 pb-24"
    >
      <div className="w-full max-w-3xl">
        {/* Subtle geometric divider connecting with the hero */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2.5 h-2.5 rounded-sm bg-dark" aria-hidden="true" />
          <div className="w-16 h-[2px] bg-dark/35" aria-hidden="true" />
          <span className="w-2 h-2 rounded-full border border-dark/50" aria-hidden="true" />
        </div>

        {/* 3-4 Paragraphs of readable Lorem Ipsum placeholder text */}
        <div className="space-y-6 font-sans text-base sm:text-lg text-dark leading-relaxed font-normal">
          {heroIntroParagraphs.map((paragraph, index) => (
            <p key={index} className="text-dark/95">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
