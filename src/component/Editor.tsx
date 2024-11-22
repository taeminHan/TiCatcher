import { defaultValueCtx, Editor, rootCtx } from '@milkdown/kit/core';
import { Milkdown, useEditor } from '@milkdown/react'
import { commonmark } from '@milkdown/kit/preset/commonmark';
import { nord } from '@milkdown/theme-nord';
import '@milkdown/theme-nord/style.css';


export const MilkdownEditor = () => {
  useEditor((root) => {
    return Editor
      .make()
      .config(ctx => {
        ctx.set(rootCtx, root)
        ctx.set(defaultValueCtx, `# Hello, World!`)
      })
      .config(nord)
      .use(commonmark)
  }, [])

  return <Milkdown />
}
