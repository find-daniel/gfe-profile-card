import Image from 'next/image';
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
  RemixiconComponentType,
} from '@remixicon/react';

interface SocialIconLink {
  component: RemixiconComponentType;
  url: string;
}

const socials: SocialIconLink[] = [
  {
    component: RiGithubFill,
    url: '#',
  },
  {
    component: RiLinkedinBoxFill,
    url: '#',
  },
  {
    component: RiInstagramFill,
    url: '#',
  },
  {
    component: RiTwitterXFill,
    url: '#',
  },
];

export default function Home() {
  return (
    <main className="flex justify-center">
      {/* Card Container */}
      <div className="mt-[200px] flex w-[340px] flex-col items-center rounded-md bg-white px-4 py-6 text-center shadow-md">
        {/* Profile Photo */}
        <Image className="mb-6" src={'/profile.png'} width={64} height={64} alt="user profile photo" />
        {/* Profile Info */}
        <div className="mb-6">
          {/* Name */}
          <p className="mb-1 text-xl font-medium text-neutral-900">Sarah Dole</p>
          {/* Job Title */}
          <p className="text-sm font-normal text-neutral-600">Front End Engineer @ Microsoft</p>
        </div>
        {/* Bio */}
        <p className="mb-10 text-base font-normal text-neutral-600">
          I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
        </p>
        {/* Contact Button */}
        <button className="mb-6 w-full rounded-md bg-indigo-700 px-4 py-2.5 text-base font-medium text-white hover:bg-indigo-800 focus-visible:rounded-md focus-visible:bg-indigo-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] disabled:bg-neutral-100 disabled:text-neutral-400">
          Contact me
        </button>
        {/* Socials */}
        <div className="flex space-x-4">
          {socials.map((SocialIcon, key) => (
            <a
              key={key}
              href={SocialIcon.url}
              target="_blank"
              tabIndex={0}
              className="cursor-pointer p-2 hover:rounded-md hover:bg-neutral-50 focus:bg-neutral-50 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]">
              <SocialIcon.component className="fill-indigo-700" size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* <!-- Attribute this challenge to yourself! --> */}
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by
        <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank">
          &nbsp; GreatFrontEnd Projects
        </a>
        . Built by
        <a href="https://www.greatfrontend.com/projects/u/danieo" target="_blank">
          &nbsp;danieo
        </a>
        .
      </div>
    </main>
  );
}
