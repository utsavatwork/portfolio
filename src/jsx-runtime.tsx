// jsx-runtime.ts
export type JSXElement = HTMLElement | DocumentFragment | string | number;

export function h(
  tag: string | Function,
  props: Record<string, any> | null,
  ...children: any[]
): HTMLElement | DocumentFragment {
  if (typeof tag === 'function') {
    return tag({ ...props, children });
  }

  const element = document.createElement(tag);

  // Set properties and attributes
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(element.style, value);
      } else if (key.startsWith('on') && typeof value === 'function') {
        // Event listeners
        const eventName = key.slice(2).toLowerCase();
        element.addEventListener(eventName, value);
      } else if (typeof value === 'boolean') {
        if (value) {
          element.setAttribute(key, '');
        }
      } else if (value != null) {
        element.setAttribute(key, String(value));
      }
    }
  }

  // Append children
  const appendChild = (child: any) => {
    if (child == null || child === false) return;
    if (Array.isArray(child)) {
      child.forEach(appendChild);
    } else if (typeof child === 'string' || typeof child === 'number') {
      element.appendChild(document.createTextNode(String(child)));
    } else if (child instanceof HTMLElement || child instanceof DocumentFragment) {
      element.appendChild(child);
    }
  };
  
  children.forEach(appendChild);
  return element;
}

export function Fragment(props: { children: any[] }): DocumentFragment {
  const fragment = document.createDocumentFragment();
  props.children.forEach(child => {
    if (child instanceof HTMLElement || child instanceof DocumentFragment) {
      fragment.appendChild(child);
    } else if (typeof child === 'string' || typeof child === 'number') {
      fragment.appendChild(document.createTextNode(String(child)));
    }
  });
  return fragment;
}

// Global JSX namespace for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface Element extends HTMLElement {}
    interface ElementClass {
      render(): HTMLElement;
    }
    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }
  }
}