# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Product Page/product.spec.js >> Product >> PRODUCT-03 Verify product Price
- Location: tests/Product Page/product.spec.js:54:9

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /home/runner/.cache/ms-playwright/webkit-2287/pw_run.sh --inspector-pipe --headless --no-startup-window --disable-http2 --disable-blink-features=AutomationControlled
<launched> pid=7296
[pid=7296][err] Cannot parse arguments: Unknown option --disable-http2
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2287/pw_run.sh --inspector-pipe --headless --no-startup-window --disable-http2 --disable-blink-features=AutomationControlled
  - <launched> pid=7296
  - [pid=7296][err] Cannot parse arguments: Unknown option --disable-http2
  - [pid=7296] <gracefully close start>
  - [pid=7296] <kill>
  - [pid=7296] <will force kill>
  - [pid=7296] <process did exit: exitCode=1, signal=null>
  - [pid=7296] starting temporary directories cleanup
  - [pid=7296] finished temporary directories cleanup
  - [pid=7296] <gracefully close end>

```