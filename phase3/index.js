const jhiCore = require('jhipster-core');

const lintFiles = jhiCore.lintFiles;

const parsed = lintFiles(['3.jdl']);

const shorterEntityDecl = parsed.errors['ENT_SHORTER_DECL']
  .map(entry => entry.entityName)
  .join(', ');

const optionalTableNamesEntities = parsed.errors['ENT_OPTIONAL_TABLE_NAME']
  .map(entry => entry.entityName)
  .join(', ');

const groupableRelationships = parsed.errors['REL_INDIVIDUAL_DECL']
  .map(entry => `[${entry.type}] from ${entry.from} to ${entry.to}`)
  .join(',\n\t');

const optionalCommas = parsed.errors['FLD_OPTIONAL_COMMAS']
  .map(entry => `${entry.field} of entity ${entry.entity}`)
  .join(',\n\t');

console.info('Found problems:');
console.info(`  Shorter entity declaration possible for entit${parsed.errors['ENT_SHORTER_DECL'].length === 1 ? 'y' : 'ies'}: ${shorterEntityDecl}.\n`);
console.info(`  Optional table names for entit${parsed.errors['ENT_OPTIONAL_TABLE_NAME'].length === 1 ? 'y' : 'ies'}: ${optionalTableNamesEntities}.\n`);
console.info(`  Groupable relationship${parsed.errors['REL_INDIVIDUAL_DECL'].length === 1 ? '' : 's'}:\n\t${groupableRelationships}.\n`);
console.info(`  Optional commas for field${parsed.errors['FLD_OPTIONAL_COMMAS'].length === 1 ? '' : 's'}:\n\t${optionalCommas}.\n`);
