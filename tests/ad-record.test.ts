import {AdRecord} from "../record/ad.record";

export const defaultObj = {
    name: 'Test2',
    description: 'cos nowego',
    url: 'https://megak.pl',
    price: 0,
    lat: 12,
    lon: 4,
}


// test('can build AdRecord', () => {
//     const ad = new AdRecord(defaultObj);
//
//     expect(ad.name).toBe('Test name');
//     expect(ad.lat).toBe(9);
// });


test('Validates invalid price', () => {
    expect(() => new AdRecord({
        ...defaultObj,
        price: -3,
    })).toThrow('Cena nie może być mniejsza niż 0 lub większa niż 9 999 999')
});

