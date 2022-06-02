import {AdRecord} from "../record/ad.record";

test('AdRecord returns data from database for one entry.', async () => {

    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');


});

test('AdRecord returns null from data for unexisting entry', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
})