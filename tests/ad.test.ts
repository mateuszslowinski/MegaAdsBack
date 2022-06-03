import {AdRecord} from "../record/ad.record";
import {pool} from "../utlis/db";
import {defaultObj} from "./ad-record.test";

afterAll(async () => {
    await pool.end()
});

test('AdRecord.getOne returns data from database for one entry.', async () => {

    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');


});

test('AdRecord.getOne returns null from data for unexisting entry', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
});

test('AdRecord.findAll returns array of found entries when searching for "a"', async () => {
    const ads = await AdRecord.findAll('a');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
});

test('AdRecord.findAll returns empty array of found entries when searching for something that does not exist', async () => {
    const ads = await AdRecord.findAll('----');

    expect(ads).toEqual([]);
});

test('AdRecord.findAll returns smaller amount of data', async () => {
    const ads = await AdRecord.findAll('asad');

    expect(ads[0].id).toBeDefined();

});


test('AdRecord.insert returns new uuid', async () => {
    const ad = await new AdRecord(defaultObj);
    await ad.insert();


    expect(ad.id).toBeDefined();
    expect(typeof ad.id).toBe('string');
});

test('AdRecord.insert inserts data to database.', async () => {
    const ad = await new AdRecord(defaultObj);
    await ad.insert();

    const foundAd = await AdRecord.getOne(ad.id);

    expect(foundAd).toBeDefined();
    expect(typeof foundAd.id).toBe('string');
    expect(foundAd).not.toBeNull();
});