import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/layout/hero/hero';

export default component$(() => {
  return (
    <>
      <Hero />

      <section class="container container-links container-flex container-spacing-xl">
        <a class="button button-dark" href="https://jonasfroeller.vercel.app" target='_blank'><img src="/globe.svg" color="white" alt="globe" /> Portfolio</a>
        <a class="button button-dark" href="https://github.com/jonasfroeller" target='_blank'><img src="/github.svg" color="white" alt="github" /> GitHub</a>
        <a class="button button-dark" href="https://gist.github.com/jonasfroeller" target='_blank'><img src="/file.svg" color="white" alt="file" /> GitHub Gists</a>
        <a class="button button-dark" href="https://webdev-snippets.pages.dev" target='_blank'><img src="/code.svg" color="white" alt="code" /> Code Snippets</a>
        <a class="button button-dark" href="https://vsc-code-snippets.vercel.app" target='_blank'><img src="/code.svg" color="white" alt="code" /> VSC Snippets</a>
        <a class="button button-dark" href="https://svelte-kit-markdown-blog.vercel.app" target='_blank'><img src="/align-right.svg" color="white" alt="align-right" /> Blog</a>
        <a class="button button-dark" href="https://codepen.io/jonasfroeller" target='_blank'><img src="/codepen.svg" color="white" alt="codepen" /> CodePen</a>
        <a class="button button-dark" href="https://www.npmjs.com/~jonasfroeller" target='_blank'><img src="/external-link.svg" color="white" alt="external-link" /> NPM</a>
        <a class="button button-dark" href="https://pixabay.com/de/users/jonasfroeller-34602411" target='_blank'><img src="/image.svg" color="white" alt="image" /> Pixabay</a>
        <a class="button button-dark" href="https://www.xing.com/profile/Jonas_Froeller/cv" target='_blank'><img src="/external-link.svg" color="white" alt="external-link" /> Xing</a>
        <a class="button button-dark" href="https://www.linkedin.com/in/jonas-fr%C3%B6ller-8b4986235" target='_blank'><img src="/linkedin.svg" color="white" alt="linkedin" /> LinkedIn</a>
        <a class="button button-dark" href="https://stackoverflow.com/users/17421351/easyoutcoded" target='_blank'><img src="/layers.svg" color="white" alt="layers" /> StackOverflow</a>
        <a class="button button-dark" href="https://hub.docker.com/u/jonasfroeller" target='_blank'><img src="/external-link.svg" color="white" alt="external-link" /> DockerHub</a>
        <a class="button button-dark" href="https://www.fiverr.com/codedesignmedia" target='_blank'><img src="/layout.svg" color="white" alt="layout" /> Fiverr</a>
        <a class="button button-dark" href="https://buymeacoffee.com/jonasfroeller" target='_blank'><img src="/heart.svg" color="white" alt="layout" /> Support</a>
        <a class="button button-dark" href="https://www.figma.com/@jonasfroeller" target='_blank'><img src="/figma.svg" color="white" alt="figma" /> Figma</a>
        <a class="button button-dark" href="https://dev.to/jonasfroeller" target='_blank'><img src="/align-right.svg" color="white" alt="align-right" /> DevTo</a>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'LinkTree',
  meta: [
    {
      name: 'description',
      content: 'Socials and Links',
    },
  ],
};
