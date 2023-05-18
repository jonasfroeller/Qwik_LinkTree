import { component$ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/">
            Jonas Fröller
          </a>
        </div>
        <ul>
          <li>
            <a href="https://github.com/jonasfroeller/Qwik_LinkTree" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
