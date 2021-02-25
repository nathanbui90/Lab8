const formatVolumeIconPath = require('../assets/scripts/main');

describe('Volume Value', () => {
    test('is greater than 66', () => {
        expect(formatVolumeIconPath(67)).toBe('./assets/media/icons/volume-level-3.svg')
    });

    test('is less than or equal to 66 and greater than 33', () => {
        expect(formatVolumeIconPath(35)).toBe('./assets/media/icons/volume-level-2.svg')
    });

    test('is less than or equal to 33 and greater than 0', () => {
        expect(formatVolumeIconPath(15)).toBe('./assets/media/icons/volume-level-1.svg')
    });

    test('is equal to 0', () => {
        expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg')
    });

});