import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={['container', styles.hero]}>
      <h1>
        LinkTree <span class="highlight">Links</span>:
        <br />
      </h1>
      <p>

      </p>
      <div class={styles['button-group']}>
        <a href="https://github.com/jonasfroeller" target="_blank" class="button">
          GitHub
        </a>
        <a href="https://gist.github.com/jonasfroeller" target="_blank" class="button button-dark">
          GitHub Gist
        </a>
      </div>
    </div>
  );
});
