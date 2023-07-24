import { MDXComponents } from '@/components/home/MDXComponents'

export function useMDXComponents(components) {
  return {
    ...components,
    ...MDXComponents,
  }
}
