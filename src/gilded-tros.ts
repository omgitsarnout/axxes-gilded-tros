import {Item} from './item';

const ItemTypesEnum = {
    WINE: "Good Wine",
    PASS_RE_FACTOR: "Backstage passes for Re:Factor",
    PASS_HAXX: "Backstage passes for HAXX",
    BDAWG: "B-DAWG Keychain",
    DUPLICATE_CODE: "Duplicate Code",
    LONG_METHODS: "Long Methods",
    UGLY_VARIABLE_NAMES: "Ugly Variable Names"
}

function updateRegular(item: Item) {
    if (item.quality > 0) {
        item.quality--;
    }

    item.sellIn--;

    if (item.sellIn < 0 && item.quality > 0) {
        item.quality--;
    }
}

function updatePass(item: Item) {
    if (item.quality < 50) {
        item.quality++;

        if (item.sellIn < 11) {
            if (item.quality < 50) {
                item.quality++;
            }
        }

        if (item.sellIn < 6) {
            if (item.quality < 50) {
                item.quality++;
            }
        }
    }

    item.sellIn--;

    if (item.sellIn < 0) {
        item.quality = 0;
    }
}

function updateGoodWine(item: Item) {
    if (item.quality < 50) {
        item.quality++;
    }

    item.sellIn--;

    if (item.sellIn < 0) {
        if (item.quality < 50) {
            item.quality++;
        }
    }
}

function updateSmellyItem(item: Item) {
    if (item.quality > 1) {
        item.quality -= 2;
    } else {
        item.quality = 0;
    }

    item.sellIn--;

    if (item.sellIn < 0) {
        if (item.quality > 1) {
            item.quality -= 2;
        } else {
            item.quality = 0;
        }
    }
}

export class GildedTros {
    constructor(public items: Array<Item>) {}

    public updateQuality(): void {
        this.items.forEach((item: Item) => {
            switch (item.name) {
                case ItemTypesEnum.WINE:
                    updateGoodWine(item);
                    break;
                case ItemTypesEnum.PASS_HAXX:
                case ItemTypesEnum.PASS_RE_FACTOR:
                    updatePass(item);
                    break;
                case ItemTypesEnum.BDAWG:
                    break;
                case ItemTypesEnum.DUPLICATE_CODE:
                case ItemTypesEnum.LONG_METHODS:
                case ItemTypesEnum.UGLY_VARIABLE_NAMES:
                    updateSmellyItem(item);
                    break;
                default:
                    updateRegular(item);
            }
        });
    }
}
