// import { createInertiaApp } from '../../inertia/createInertiaApp';
import { createInertiaApp } from 'inertia-solid';
import { render } from 'solid-js/web';

createInertiaApp({
  id: 'root',
  resolve: async (name: string) => {
    const pages = import.meta.glob('./Pages/**/*.tsx', {
      import: 'default',
      eager: true,
    });

    return pages[`./Pages/${name}.tsx`];
  },
  setup: ({ el, App, props }) => {
    render(() => <App {...props} />, el);
  },
});
