import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  productListMKII = { //This is an array that isn't technically using the interface, but meets all its criteria. Interface arrays will work with it.
    weapons : [
      {
        id: 1,
        name: 'The Master Sword',
        category: 'Weapon',
        desc: 'This ancient blade has been thwarting evil for centuries. It will shoot lasers if the user has full health. Sidekick not included',
        URL: 'TheMasterSword',
        price: 1000000,
        img: 'MasterSwordImage.jpeg',
        qty: 0
      },
      {
        id: 2,
        name: 'Megaton Hammer',
        category: 'Weapon',
        desc: 'This heavy smoosher was used on 2 separate occasions to slay the dragon Volvagia. Creates shockwaves.',
        URL: 'MegatonHammer',
        price: 5000,
        img: 'MegatonHammer.png',
        qty: 0
      },
      {
        id: 3,
        name: 'Biggoron Sword',
        category: 'Weapon',
        desc: 'Forged by a master Goron smith, This massive blade will carve through your enemies and never dull or break.',
        URL: 'BiggoronSword',
        price: 7500,
        img: 'BiggoronSword.jpg',
        qty: 0
      },
      {
        id: 4,
        name: "Hero's Bow",
        category: 'Weapon',
        desc: 'This bow has seen the hands of many an expert marksman. Can be used with mundane and magical arrows alike.',
        URL: 'HeroBow',
        price: 3000,
        img: 'HeroBow.jpg',
        qty: 0
      },
      {
        id: 5,
        name: 'Kokiri Sword',
        category: 'Weapon',
        desc: 'The weapon of choice of the diminutive Kokiri, this blade was once wielded by a great hero.',
        URL: 'KokiriSword',
        price: 500,
        img: 'KokiriSword.jpg',
        qty: 0
      },
      {
        id: 6,
        name: 'Fire Arrows',
        category: 'Weapon',
        desc: 'Enchanted with powerful magic, these arrows will incinerate anyone foolish enough to stand against you.',
        URL: 'FireArrows',
        price: 1500,
        img: 'FireArrows.png',
        qty: 0
      },
      {
        id: 7,
        name: 'Ice Arrows',
        category: 'Weapon',
        desc: 'Enchanted with powerful magic, these arrows can freeze your enemies in place with chilling ease.',
        URL: 'IceArrows',
        price: 1500,
        img: 'IceArrows.png',
        qty: 0
      },
      {
        id: 8,
        name: 'Light Arrows',
        category: 'Weapon',
        desc: 'Enchanted with powerful magic, these arrows easily pierce the defenses of all who walk the path of evil.',
        URL: 'LightArrows',
        price: 8000,
        img: 'LightArrows.png',
        qty: 0
      } 
    ],

    equipment : [
      {
        id: 9,
        name: 'The Hylian Shield',
        category: 'Equipment',
        desc: 'Forged in ancient times by a powerful thunder dragon, this shield is impervious to all forms of attack',
        URL: 'TheHylianShield',
        price: 80000,
        img: 'HylianShieldImage.jpg',
        qty: 0
      },
      {
        id: 10,
        name: 'Mirror Shield',
        category: 'Equipment',
        desc:'This shield combines the durability of the Hylian shield with a polished surface for reflecting light.',
        URL: 'MirrorShield',
        price: 100000,
        img: 'MirrorShield.png',
        qty: 0
      },
      {
        id: 11,
        name: 'Goron Tuinic',
        category: 'Equipment',
        desc:'Woven from bomb flower fibers and dodongo scales, this tunic is highly resistant to heat.',
        URL: 'GoronTunic',
        price: 5000,
        img: 'GoronTunic.jpg',
        qty: 0
      },
      {
        id: 12,
        name: "Zora Tunic",
        category: 'Equipment',
        desc:'Primarily composed of fish gills, this tunic allows the wearer to breath underwater indefinitely.',
        URL: 'ZoraTunic',
        price: 5000,
        img: 'ZoraTunic.jpeg',
        qty: 0
      },
      {
        id: 13,
        name: 'Iron Boots',
        category: 'Equipment',
        desc:'These heavy iron boots come in handy when walking against strong wind or sinking in water.',
        URL: 'IronBoots',
        price: 2000,
        img: 'IronBoots.png',
        qty: 0
      },
      {
        id: 14,
        name: 'Hover Boots',
        category: 'Equipment',
        desc:'These golden boots allow the wearer to hover briefly. Enchantment may cause loss of traction.',
        URL: 'HoverBoots',
        price: 3500,
        img: 'HoverBoots.png',
        qty: 0
      },
      {
        id: 15,
        name: 'Golden Gauntlets',
        category: 'Equipment',
        desc:'These shining gauntlets increase the wearers strength exponentially. Useful for moving blocks.',
        URL: 'GoldenGauntlets',
        price: 50000,
        img: 'GoldenGauntlets.png',
        qty: 0
      },
      {
        id: 16,
        name: 'Deku Shield',
        category: 'Equipment',
        desc:'Carved from the bark of the Great Deku Tree, this shield is emblazoned with the symbol of the Kokiri.',
        URL: 'DekuShield',
        price: 500,
        img: 'DekuShield.jpg',
        qty: 0
      } 
    ],

    tools : [
      {
        id: 17,
        name: 'The Lens of Truth',
        category: 'Tools',
        desc:'This magical magnifying glass allows the user to see past illusions and reveals ghosts. Consumes magic.',
        URL: 'TheLensofTruth',
        price: 4500,
        img: 'LensofTruthImage.jpeg',
        qty: 0
      },
      {
        id: 18,
        name: 'Hookshot',
        category: 'Tools',
        desc:'This ingenius contraption fires a grappling hook with a powerful mechanism for retracting the chain.',
        URL: 'Hookshot',
        price: 8500,
        img: 'Hookshot.jpg',
        qty: 0
      },
      {
        id: 19,
        name: 'Longshot',
        category: 'Tools',
        desc:'This hookshot model has been upgraded with a longer chain and stronger winch system.',
        URL: 'Longshot',
        price: 10000,
        img: 'Longshot.png',
        qty: 0
      },
      {
        id: 20,
        name: "Bombchus (x10)",
        category: 'Tools',
        desc:'These nimble explosives travel along surfaces to reach areas that normal bombs cannot.',
        URL: 'Bombchus',
        price: 100,
        img: 'Bombchu.png',
        qty: 0 
      },
      {
        id: 21,
        name: 'Deku Nuts (x5)',
        category: 'Tools',
        desc:'These nuts grow on Deku Babas. When thrown, they create a blinding flash on impact.',
        URL: 'DekuNuts',
        price: 15,
        img: 'DekuNut.png',
        qty: 0
      },
      {
        id: 22,
        name: 'Boomerang',
        category: 'Tools',
        desc:"Though a child's weapon, this boomerang can stun enemies and retrieve fallen items.",
        URL: 'Boomerang',
        price: 2000,
        img: 'Boomerang.png',
        qty: 0 
      },
      {
        id: 23,
        name: 'Fairy Ocarina',
        category: 'Tools',
        desc:'Crafted by the care-free Kokiri, these ocarinas are rumored to contain magical properties.',
        URL: 'FairyOcarina',
        price: 4000,
        img: 'FairyOcarina.png',
        qty: 0 
      },
      {
        id: 24,
        name: 'Bottle',
        category: 'Tools',
        desc: "An adventurer's most loyal companion. Can carry a multitude of items. Fairy not included.",
        URL: 'Bottle',
        price: 500000,
        img: 'Bottle.jpg',
        qty: 0
      }
    ]
  }

  constructor() { }

  getEquipment() {
    return this.productListMKII.equipment;
  }

  getWeapons() {
    return this.productListMKII.weapons;
  }

  getTools() {
    return this.productListMKII.tools;
  }

}
