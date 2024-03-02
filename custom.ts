
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

enum Houi {
    //% block="東"
    east = 1,
    //% block="西"
    west = 2,
    //% block="南"
    south = 3,
    //% block="北"
    north = 4
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="" block="コンパス"
namespace IMLcompus {
    //% block
    //export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    //}

    //% block="北向き"
    //% weight=100    
    export function isNorth(): boolean {
        let c = input.compassHeading();
        if( c>350 || c<10 ) return true;
                        else return false;
    }
    //% block="東向き"
    //% weight=100    
    export function isEast(): boolean {
        let c = input.compassHeading();
        if (c > 80 && c < 100) return true;
        else return false;
    }
    //% block="南向き"
    //% weight=100    
    export function isSouth(): boolean {
        let c = input.compassHeading();
        if (c > 170 && c < 190) return true;
        else return false;
    }
    //% block="西向き"
    //% weight=100    
    export function isWest(): boolean {
        let c = input.compassHeading();
        if (c > 260 && c < 280) return true;
        else return false;
    }
    //% block="向き %h"
    //% weight=100    
    export function isDirection(h: Houi): boolean {
        switch(h)
        {
            case Houi.east: return isEast();  break;
            case Houi.west: return isWest();  break;
            case Houi.south: return isSouth(); break;
            case Houi.north: return isNorth(); break;
            default: return false;
        }
    }
}
