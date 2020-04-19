abstract class User {
  name: string;
  age: number;
  career: string;
  work: string[];
  constructor(name: string, age: number, career: string) {
    this.name = name;
    this.age = age;
    this.career = career;
  }
  // 抽象方法必须在抽象类中
  // 抽象方法不能有具体实现
  abstract applyWork(): void;
  // 抽象类中可以有非抽象方法
  sayWork(): void {
    console.log(`my work is ${this.work.join(",")}`);
  }
}

class Coder extends User {
  constructor(name: string, age: number, career: string) {
    super(name, age, career);
  }
  // 继承抽象类，必须实现抽象类中的抽象方法
  applyWork(): void {
    this.work = ["写代码", "写系分", "修Bug"];
  }
}

class Productor extends User {
  constructor(name: string, age: number, career: string) {
    super(name, age, career);
  }
  applyWork(): void {
    this.work = ["订会议室", "写PRD", "催更"];
  }
}

class Boss extends User {
  constructor(name: string, age: number, career: string) {
    super(name, age, career);
  }
  applyWork(): void {
    this.work = ["喝茶", "看报", "见客户"];
  }
}
// 抽象类不能被实例化
// let user = new User(("cc", 12, "hhh");

let cc = new Coder("cc", 12, "hhh");
cc.applyWork();
cc.sayWork();

abstract class Factory {
  abstract createStaff(name: string, age: number, career: string): User;
}

class CoderFactory extends Factory {
  createStaff(name: string, age: number, career: string): Coder {
    return new Coder(name, age, career);
  }
}

class ProductorFactory extends Factory {
  createStaff(name: string, age: number, career: string): Productor {
    return new Productor(name, age, career);
  }
}

class BossFactory extends Factory {
  createStaff(name: string, age: number, career: string): Boss {
    return new Boss(name, age, career);
  }
}

let hh = new ProductorFactory();
let hhstaff = hh.createStaff("cshine", 15, "ccc");
hhstaff.applyWork();
hhstaff.sayWork();

// 抽象产品类--鼠标
abstract class Mouse {
  abstract sayHi(): void;
}

// Dell鼠标
class DellMouse extends Mouse {
  sayHi(): void {
    console.log("This is DellMouse");
  }
}

// 惠普鼠标
class HpMouse extends Mouse {
  sayHi(): void {
    console.log("This is HpMouse");
  }
}

// 简单工厂
// class MouseFactory {
// 静态方法不会被继承
//   static createMouse(brand: string): Mouse {
//     let mouse: Mouse;
//     switch (brand) {
//       case "Dell":
//         mouse = new DellMouse();
//         break;
//       case "Hp":
//         mouse = new HpMouse();
//         break;
//       default:
//         throw new Error("brand error");
//     }
//     return mouse;
//   }
// }

// const m1 = MouseFactory.createMouse("Dell");
// m1.sayHi();
// const m2 = MouseFactory.createMouse("Hp");
// m2.sayHi();

// 工厂方法
// // 鼠标工厂接口
// interface MouseFactory {
//   createMouse(): Mouse;
// }
// // 鼠标工厂抽象类
// // abstract class MouseFactory {
// //   abstract createMouse(): Mouse;
// // }

// // Dell鼠标工厂
// class DellMouseFactory implements MouseFactory {
//   createMouse(): Mouse {
//     return new DellMouse();
//   }
// }
// // Hp鼠标工厂
// class HpMouseFactory implements MouseFactory {
//   createMouse(): Mouse {
//     return new HpMouse();
//   }
// }
// let brand = "Dell";
// let mf: MouseFactory;
// switch (brand) {
//   case "Dell":
//     mf = new DellMouseFactory();
//     break;
//   case "Hp":
//     mf = new HpMouseFactory();
//     break;
//   default:
//     throw new Error("brand error");
// }
// const m = mf.createMouse();
// m.sayHi();

// 抽象工厂
// 抽象产品类--键盘
abstract class Keybo {
  abstract sayHi(): void;
}

class DellKeybo extends Keybo {
  sayHi(): void {
    console.log("This is DellKeybo");
  }
}

class HpKeybo extends Keybo {
  sayHi(): void {
    console.log("This is HpKeybo");
  }
}
// pc工厂接口
interface PcFactory {
  createMouse(): Mouse;
  createKeybo(): Keybo;
}
// pc工厂抽象类
// abstract class PcFactory {
//   abstract createMouse(): Mouse;
//   abstract createKeybo(): Keybo;
// }

// DellPc工厂
class DellPcFactory implements PcFactory {
  createMouse(): DellMouse {
    return new DellMouse();
  }
  createKeybo(): DellKeybo {
    return new DellKeybo();
  }
}
// HpPc工厂
class HpPcFactory implements PcFactory {
  createMouse(): HpMouse {
    return new HpMouse();
  }
  createKeybo(): HpKeybo {
    return new HpKeybo();
  }
}
let brand = "Dell";
let mf: PcFactory;
switch (brand) {
  case "Dell":
    mf = new DellPcFactory();
    break;
  case "Hp":
    mf = new HpPcFactory();
    break;
  default:
    throw new Error("brand error");
}
const m = mf.createMouse();
const k = mf.createKeybo();
m.sayHi();
k.sayHi();
