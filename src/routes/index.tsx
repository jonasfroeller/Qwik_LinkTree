import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Hero from '~/components/layout/hero/hero';

export default component$(() => {
  return (
    <>
      <Hero />

      <section class="container container-links container-flex container-spacing-xl">
        <a class="button button-dark" href="https://jonasfroeller.vercel.app" target='_blank'><img src="/globe.svg" color="white" alt="" /> Portfolio</a>
        <a class="button button-dark" href="https://github.com/jonasfroeller" target='_blank'><img src="/github.svg" color="white" alt="" /> GitHub</a>
        <a class="button button-dark" href="https://gist.github.com/jonasfroeller" target='_blank'><img src="/file.svg" color="white" alt="" /> GitHub Gists</a>
        <a class="button button-dark" href="https://webdev-snippets.pages.dev/" target='_blank'><img src="/code.svg" color="white" alt="" /> Code Snippets</a>
        <a class="button button-dark" href="https://vsc-code-snippets.vercel.app/ target='_blank'"><img src="/code.svg" color="white" alt="" /> VSC Snippets</a>
        <a class="button button-dark" href="https://svelte-kit-markdown-blog.vercel.app/ target='_blank'"><img src="/align-right.svg" color="white" alt="" /> Blog</a>
        <a class="button button-dark" href="https://codepen.io/jonasfroeller" target='_blank'><img src="/codepen.svg" color="white" alt="" /> CodePen</a>
        <a class="button button-dark" href="https://www.npmjs.com/~jonasfroeller" target='_blank'><img src="/external-link.svg" color="white" alt="" /> NPM</a>
        <a class="button button-dark" href="https://pixabay.com/de/users/iproduceassets-30997310/" target='_blank'><img src="/image.svg" color="white" alt="" /> Pixabay</a>
        <a class="button button-dark" href="https://www.xing.com/profile/Jonas_Froeller/cv" target='_blank'><img src="/external-link.svg" color="white" alt="" /> Xing</a>
        <a class="button button-dark" href="https://www.linkedin.com/in/jonas-fr%C3%B6ller-8b4986235/" target='_blank'><img src="/linkedin.svg" color="white" alt="" /> LinkedIn</a>
        <a class="button button-dark" href="https://stackoverflow.com/users/17421351/easyoutcoded" target='_blank'><img src="/layers.svg" color="white" alt="" /> StackOverflow</a>
        <a class="button button-dark" href="https://hub.docker.com/u/jonasfroeller" target='_blank'><img src="/external-link.svg" color="white" alt="" /> DockerHub</a>
        <a class="button button-dark" href="https://www.fiverr.com/codedesignmedia" target='_blank'><img src="/layout.svg" color="white" alt="" /> Fiverr</a>
        <a class="button button-dark" href="https://www.figma.com/@jonasfroeller" target='_blank'><img src="/figma.svg" color="white" alt="" /> Figma</a>
        <a class="button button-dark" href="https://dev.to/jonasfroeller" target='_blank'><img src="/align-right.svg" color="white" alt="" /> DevTo</a>
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
