import {Item} from '../src/item';
import {GildedTros} from '../src/gilded-tros';

function createAndUpdateItem(name: string, sellIn: number, quality: number): GildedTros {
    const items: Item[] = [new Item(name, sellIn, quality)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    return app;
}

describe('GoodWine', () => {
    it('QualityGoesUpByOne', () => {
        const app = createAndUpdateItem('Good Wine', 10, 20);
        expect(app.items[0].quality).toEqual(21);
    });
    it('PastSellIn_QualityGoesUpByTwo', () => {
        const app = createAndUpdateItem('Good Wine', -1, 20);
        expect(app.items[0].quality).toEqual(22);
    });
    it('QualityNeverMoreThan50', () => {
        const app = createAndUpdateItem('Good Wine', 10, 50);
        expect(app.items[0].quality).toEqual(50);
    })
    it('PastSellIn_QualityNeverMoreThan50', () => {
        const app = createAndUpdateItem('Good Wine', -1, 49);
        expect(app.items[0].quality).toEqual(50);
    })
});

describe('BackstagePasses', () => {
    it('QualityGoesUpByOne_MoreThan10DaysUntilSellIn', () => {
        const app = createAndUpdateItem('Backstage passes for Re:Factor', 12, 20);
        expect(app.items[0].quality).toEqual(21);
    });
    it('QualityGoesUpByTwo_MoreThan5DaysUntilSellIn', () => {
        const app = createAndUpdateItem('Backstage passes for Re:Factor', 7, 20);
        expect(app.items[0].quality).toEqual(22);
    });
    it('QualityGoesUpByThree_LessThan6DaysUntilSellIn', () => {
        const app = createAndUpdateItem('Backstage passes for Re:Factor', 3, 20);
        expect(app.items[0].quality).toEqual(23);
    });
    it('MoreThan10DaysUntilSellIn_QualityNeverMoreThan50', () => {
        const app = createAndUpdateItem('Backstage passes for Re:Factor', 12, 50);
        expect(app.items[0].quality).toEqual(50);
    });
    it('MoreThan5DaysUntilSellIn_QualityNeverMoreThan50', () => {
        const app = createAndUpdateItem('Backstage passes for Re:Factor', 7, 49);
        expect(app.items[0].quality).toEqual(50);
    });
    it('LessThan6DaysUntilSellIn_QualityNeverMoreThan50', () => {
        const app = createAndUpdateItem('Backstage passes for Re:Factor', 3, 49);
        expect(app.items[0].quality).toEqual(50);
    });
    it('QualityDropsToZeroAfterSellIn', () => {
        const app = createAndUpdateItem('Backstage passes for Re:Factor', -1, 20);
        expect(app.items[0].quality).toEqual(0);
    });
});

describe('B-DAWG-Keychain', () => {
    it('NeverDecreasesInQuality', () => {
        const app = createAndUpdateItem('B-DAWG Keychain', 10, 20);
        expect(app.items[0].quality).toEqual(20);
    });
    it('PastSellIn_NeverDecreasesInQuality', () => {
        const app = createAndUpdateItem('B-DAWG Keychain', -1, 20);
        expect(app.items[0].quality).toEqual(20);
    })
    it('NeverHasToBeSold', () => {
        const app = createAndUpdateItem('B-DAWG Keychain', 10, 20);
        expect(app.items[0].quality).toEqual(20);
    })
});

describe('RegularItem', () => {
    it('SellInAndQualityLower', () => {
        const app = createAndUpdateItem('Regular Product', 10, 50);
        expect(app.items[0].quality).toEqual(49);
    });
    it('ItemPastSellIn_QualityDegradesTwiceAsFast', () => {
        const app = createAndUpdateItem('Regular Product', -1, 50);
        expect(app.items[0].quality).toEqual(48);
    });
    it('QualityNeverLowerThanZero', () => {
        const app = createAndUpdateItem('Regular Product', -1, 0);
        expect(app.items[0].quality).toEqual(0);
    })
});

describe('Smelly Items', () => {
    it('DegradesInQualityWithTwo_DuplicateCode', () => {
        const app = createAndUpdateItem('Duplicate Code', 10, 50);
        expect(app.items[0].quality).toEqual(48);
    });
    it('DegradesInQualityWithTwo_LongMethods', () => {
        const app = createAndUpdateItem('Long Methods', 10, 50);
        expect(app.items[0].quality).toEqual(48);
    });
    it('DegradesInQualityWithTwo_UglyVariableNames', () => {
        const app = createAndUpdateItem('Ugly Variable Names', 10, 50);
        expect(app.items[0].quality).toEqual(48);
    });
    it('QualityNeverLowerThanZero_DuplicateCode', () => {
        const app = createAndUpdateItem('Duplicate Code', -1, 0);
        expect(app.items[0].quality).toEqual(0);
    })
    it('QualityNeverLowerThanZero_LongMethods', () => {
        const app = createAndUpdateItem('Long Methods', -1, 0);
        expect(app.items[0].quality).toEqual(0);
    })
    it('QualityNeverLowerThanZero_UglyVariableNames', () => {
        const app = createAndUpdateItem('Ugly Variable Names', -1, 0);
        expect(app.items[0].quality).toEqual(0);
    })
})
