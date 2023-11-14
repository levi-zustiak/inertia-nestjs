import { createComponent, mergeProps, ParentComponent } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';
import { PageContext } from './PageContext';
import { router } from './router';

type InertiaContext = {
  component: any;
  page: any;
  layouts: ParentComponent<any>[];
  key: any;
};

function extractLayouts(component) {
  if (!component) {
    return [];
  }

  if (typeof component.layout === 'function') {
    return [component.layout];
  }

  if (Array.isArray(component.layout)) {
    return component.layout;
  }

  return [];
}

export function App({ initialComponent, initialPage, resolveComponent }: any) {
  const [context, setContext] = createStore<InertiaContext>({
    component: initialComponent || null,
    page: initialPage,
    layouts: extractLayouts(initialComponent || null),
    key: null,
  });

  router.init(
    initialPage,
    resolveComponent,
    async ({ component, page, preserveState }) => {
      setContext(
        reconcile({
          component,
          layouts: extractLayouts(component),
          page,
          key: preserveState ? context.key : Date.now(),
        }),
      );
    },
  );

  const children = (i = 0) => {
    const layout = context.layouts[i];

    if (!layout) {
      return createComponent(
        context.component,
        mergeProps({ key: context.key }, () => context.page.props),
      );
    }

    return createComponent(
      layout,
      mergeProps(() => context.page.props, {
        get children() {
          return children(i + 1);
        },
      }),
    );
  };

  return createComponent(PageContext.Provider, {
    get value() {
      return context.page;
    },
    get children() {
      return children();
    },
  });
}
