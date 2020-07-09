const core = require('@actions/core')
const github = require('@actions/github')

try {
  const body = core.getInput('body')
  console.log(`Body: ${body}`)
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`)
} catch (e) {
  core.setFailed(e.message)
}