exports.command = 'nameContract <command>'
exports.desc = 'Manage name contracts'
exports.builder = function (yargs) {
  yargs.option('apiURL', {
    alias: 'a',
    description: 'Substrate API url',
    type: 'string'
  })
  yargs.option('mnemonic', {
    alias: 'm',
    description: 'Mnemonic to sign with',
    type: 'string'
  })
  // yargs.demandOption(['a', 'm'])
  return yargs.commandDir('name_contract_cmds')
}
exports.handler = function (argv) {}
