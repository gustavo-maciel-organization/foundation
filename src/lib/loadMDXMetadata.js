import glob from 'fast-glob'

const exportNames = {
  blog: 'article',
  work: 'caseStudy',
}

export async function loadMDXMetadata(directory) {
  return (
    await Promise.all(
      (
        await glob('**/page.mdx', { cwd: `src/pages/${directory}` })
      ).map(async (filename) => {
        let id = filename.replace(/\/page\.mdx$/, '')
        return {
          id,
          href: `/${directory}/${id}`,
          ...(await import(`../pages/${directory}/${filename}`))[
            exportNames[directory]
          ],
        }
      })
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}
