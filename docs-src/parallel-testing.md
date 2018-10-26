# Parallel testing

There is a possibility to run tests in parallel.

### How to execute
Use a command `npm run kakunin -- --parallel <number of instances>` where `number of instances` is a number.

Example:
- `npm run kakunin -- --chrome --parallel 2`

<span style="color:red">Keep in mind that the merged report is available in the `reports/report/index.html` file. text</span>

### Troubleshooting
1. Running more than one instance in `Firefox` is not possible now (fix in-progress).