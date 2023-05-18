const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_NAME);

const minifyItems = (records) =>
  records.map((record) => getMinifiedItem(record));



// to make record meaningful.
const getMinifiedItem = (record) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, minifyItems, getMinifiedItem };

//Record {
//  _table: Table {
//     _base: Base { _airtable: Airtable {}, _id: 'apptIovRKjMuRuX1e' },
//     id: null,
//     name: 'tblWzpQJc4veX1Qel',
//     find: [Function (anonymous)],
//     select: [Function: bound ],
//     create: [Function (anonymous)],
//     update: [Function (anonymous)],
//     replace: [Function (anonymous)],
//     destroy: [Function (anonymous)],
//     list: [Function (anonymous)],
//     forEach: [Function (anonymous)]
//   },
//   id: 'recXBQu97CxNZnyzP',
//   _rawJson: {
//     id: 'recXBQu97CxNZnyzP',
//     createdTime: '2023-02-15T15:53:53.000Z',
//     fields: {
//       SizeInGB: 175.2,
//       Location: [Array],
//       StartTimeAbbreviation: '0403',
//       ShootIDOverride: '20230214.0.0403_WOMGEN1274.PodcastZine.Workshop',
//       IngestedBy: [Array],
//       EventType: [Array],
//       CopiedtoSynologyBy: [Array],
//       _PROJECTS: [Array],
//       HeroShot: [Array],
//       'Post-processing': [Array],
//       Date: '2023-02-14',
//       BackupCheckBy: [Array],
//       StorageLocations: [Array],
//       NumberOfStorageLocations: 3,
//       LocationDescription: [Array],
//       Created: '2023-02-15T15:53:53.000Z',
//       _PROJECTS_Metaproject_Abbreviation: [Array],
//       _PROJECTS_Abbreviation: [Array],
//       ShootID: '20230214.0.0403_WOMGEN1274.PodcastZine.Workshop'
//     }
//   },
//   fields: {
//     SizeInGB: 175.2,
//     Location: [ 'recdvT4HjsmfxHDNA' ],
//     StartTimeAbbreviation: '0403',
//     ShootIDOverride: '20230214.0.0403_WOMGEN1274.PodcastZine.Workshop',
//     IngestedBy: [ 'recWJPLdt7Wpwrur5' ],
//     EventType: [ 'recsjo5FQqOEmLk3l' ],
//     CopiedtoSynologyBy: [ 'recWJPLdt7Wpwrur5' ],
//     _PROJECTS: [ 'recit7LlSsSzC2RZU' ],
//     HeroShot: [ [Object] ],
//     'Post-processing': [ 'rectf14hpRrFnpUxi' ],
//     Date: '2023-02-14',
//     BackupCheckBy: [ 'recYLRtt9HvODw6PA' ],
//     StorageLocations: [ 'rec82Ym7o7ZhMhQuk', 'recfOhfo2QoN4C0D1', 'rec25LdajLXqAtrta' ],
//     NumberOfStorageLocations: 3,
//     LocationDescription: [ 'Main Studio free-for-all\n' ],
//     Created: '2023-02-15T15:53:53.000Z',
//     _PROJECTS_Metaproject_Abbreviation: [ 'WOMGEN1274' ],
//     _PROJECTS_Abbreviation: [ 'PodcastZine' ],
//     ShootID: '20230214.0.0403_WOMGEN1274.PodcastZine.Workshop'
//   },
//   save: [Function (anonymous)],
//   patchUpdate: [Function (anonymous)],
//   putUpdate: [Function (anonymous)],
//   destroy: [Function (anonymous)],
//   fetch: [Function (anonymous)],
//   updateFields: [Function (anonymous)],
//   replaceFields: [Function (anonymous)]
// }
// {
//   id: 'recXBQu97CxNZnyzP',
//   fields: {
//     SizeInGB: 175.2,
//     Location: [ 'recdvT4HjsmfxHDNA' ],
//     StartTimeAbbreviation: '0403',
//     ShootIDOverride: '20230214.0.0403_WOMGEN1274.PodcastZine.Workshop',
//     IngestedBy: [ 'recWJPLdt7Wpwrur5' ],
//     EventType: [ 'recsjo5FQqOEmLk3l' ],
//     CopiedtoSynologyBy: [ 'recWJPLdt7Wpwrur5' ],
//     _PROJECTS: [ 'recit7LlSsSzC2RZU' ],
//     HeroShot: [ [Object] ],
//     'Post-processing': [ 'rectf14hpRrFnpUxi' ],
//     Date: '2023-02-14',
//     BackupCheckBy: [ 'recYLRtt9HvODw6PA' ],
//     StorageLocations: [ 'rec82Ym7o7ZhMhQuk', 'recfOhfo2QoN4C0D1', 'rec25LdajLXqAtrta' ],
//     NumberOfStorageLocations: 3,
//     LocationDescription: [ 'Main Studio free-for-all\n' ],
//     Created: '2023-02-15T15:53:53.000Z',
//     _PROJECTS_Metaproject_Abbreviation: [ 'WOMGEN1274' ],
//     _PROJECTS_Abbreviation: [ 'PodcastZine' ],
//     ShootID: '20230214.0.0403_WOMGEN1274.PodcastZine.Workshop',
//     brought: false
//   }
// }
