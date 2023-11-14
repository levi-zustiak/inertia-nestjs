import { App } from './App';

export async function createInertiaApp({
  id = 'root',
  resolve,
  setup,
}: any): Promise<void> {
  const el = document.getElementById(id)!;
  const initialPage = JSON.parse(el?.dataset.page ?? 'null');

  if (!initialPage) throw new Error('Inertia initialPage was not found');

  const resolveComponent = async (name) => {
    const module = await resolve(name);

    return module.default || module;
  };

  const initialComponent = await resolveComponent(initialPage.component);

  setup({
    el,
    App,
    props: {
      initialPage,
      initialComponent,
      resolveComponent,
    },
  });
}
