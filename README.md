# bake-server-functions

Created via template: `bun create github.com/renkudev/template-bun`.

The server function is defined in `functions/hello.ts`. If I comment out the `"use server"` directive, the site renders and the function is called as a regular function on the client.

With the "user server" directive in place, the following error is thrown by Bun:

```sh
Started development server: http://localhost:3000
============================================================
Bun Canary v1.3.4-canary.11 (ddcec61f) macOS Silicon
macOS v26.1
CPU: fp aes crc32 atomics
Args: "bun" "--watch" "index.ts"
Features: Bun.stderr(2) Bun.stdout(2) bunfig http_server jsc dev_server todo_panic transpiler_cache tsconfig(3) process_dlopen
Builtins: "bun:main" "node:assert" "node:async_hooks" "node:crypto" "node:fs" "node:fs/promises" "node:module" "node:os" "node:path" "node:perf_hooks" "node:process" "node:tty" "node:url" "node:util" "node:vm" "node:v8"
Elapsed: 1020ms | User: 154ms | Sys: 80ms
RSS: 67.34MB | Peak: 67.34MB | Commit: 1.07GB | Faults: 124 | Machine: 25.77GB

panic: TODO: registerServerReference (ast/P.zig:6061)
Crashed while visiting /Users/bndkt/Developer/GitHub/bake-server-functions/functions/hello.ts
oh no: Bun has crashed. This indicates a bug in Bun, not your code.

oh no: multiple threads are crashing
panic(main thread): TODO: "use server" (bundler/bundle_v2.zig:3805)
```
