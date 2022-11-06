import {Item} from '../src/item';
import {GildedTros} from '../src/gilded-tros';

function createAndUpdateItem(name: String, sellIn: Number, quality: Number) {

}

describe('GoodWine', () => {
    it('QualityGoesUpByOne', () => {

    });
    it('PastSellIn_QualityGoesUpByTwo', () => {

    });
    it('QualityNeverMoreThan50', () => {

    })
});

describe('BackstagePasses', () => {
    it('QualityGoesUpByOne_MoreThan10DaysUntilSellIn', () => {

    });
    it('QualityGoesUpByTwo_MoreThan5DaysUntilSellIn', () => {

    });
    it('QualityGoesUpByTwo_LessThan6DaysUntilSellIn', () => {

    });
    it('QualityNeverMoreThan50', () => {

    });
    it('QualityDropsToZeroAfterSellIn', () => {

    });
});

describe('B-DAWG-Keychain', () => {
    it('NeverDecreasesInQuality', () => {

    });
    it('PastSellIn_NeverDecreasesInQuality', () => {

    })
});

describe('RegularItem', () => {
    it('SellInAndQualityLower', () => {

    });
    it('ItemPastSellIn_QualityDegradesTwiceAsFast', () => {

    });
    it('QualityNeverLowerThanZero', () => {

    })
});
