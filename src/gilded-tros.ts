import {Item} from './item';
import It = jest.It;

const ItemTypesEnum = {
    WINE: "Good Wine",
    PASS_RE_FACTOR: "Backstage passes for Re:Factor",
    PASS_HAXX: "Backstage passes for HAXX",
    BDAWG: "B-DAWG Keychain"
}

function updateRegular(item: Item) {
    if (item.quality > 0) {
        item.quality = item.quality - 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality > 0) {
        item.quality = item.quality - 1;
    }
}

function updatePass(item: Item) {
    if (item.quality < 50) {
        item.quality = item.quality + 1;

        if (item.sellIn < 11) {
            if (item.quality < 50) {
                item.quality = item.quality + 1;
            }
        }

        if (item.sellIn < 6) {
            if (item.quality < 50) {
                item.quality = item.quality + 1;
            }
        }
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
        item.quality = 0;
    }
}

function updateGoodWine(item: Item) {
    if (item.quality < 50) {
        item.quality = item.quality + 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
        if (item.quality < 50) {
            item.quality = item.quality + 1;
        }
    }
}

export class GildedTros {
    constructor(public items: Array<Item>) {}

    public updateQuality(): void {
        this.items.forEach((item: Item) => {
            if (item.name === ItemTypesEnum.WINE)
                updateGoodWine(item);
            else if (item.name === ItemTypesEnum.BDAWG)
                return;
            else if (item.name === ItemTypesEnum.PASS_HAXX || item.name === ItemTypesEnum.PASS_RE_FACTOR)
                updatePass(item);
            else
                updateRegular(item);
        });
    }
}
