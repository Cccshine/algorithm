var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age, career) {
        this.name = name;
        this.age = age;
        this.career = career;
    }
    // 抽象类中可以有非抽象方法
    User.prototype.sayWork = function () {
        console.log("my work is " + this.work.join(","));
    };
    return User;
}());
var Coder = /** @class */ (function (_super) {
    __extends(Coder, _super);
    function Coder(name, age, career) {
        return _super.call(this, name, age, career) || this;
    }
    // 继承抽象类，必须实现抽象类中的抽象方法
    Coder.prototype.applyWork = function () {
        this.work = ["写代码", "写系分", "修Bug"];
    };
    return Coder;
}(User));
var Productor = /** @class */ (function (_super) {
    __extends(Productor, _super);
    function Productor(name, age, career) {
        return _super.call(this, name, age, career) || this;
    }
    Productor.prototype.applyWork = function () {
        this.work = ["订会议室", "写PRD", "催更"];
    };
    return Productor;
}(User));
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss(name, age, career) {
        return _super.call(this, name, age, career) || this;
    }
    Boss.prototype.applyWork = function () {
        this.work = ["喝茶", "看报", "见客户"];
    };
    return Boss;
}(User));
// 抽象类不能被实例化
// let user = new User(("cc", 12, "hhh");
var cc = new Coder("cc", 12, "hhh");
cc.applyWork();
cc.sayWork();
var Factory = /** @class */ (function () {
    function Factory() {
    }
    return Factory;
}());
var CoderFactory = /** @class */ (function (_super) {
    __extends(CoderFactory, _super);
    function CoderFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoderFactory.prototype.createStaff = function (name, age, career) {
        return new Coder(name, age, career);
    };
    return CoderFactory;
}(Factory));
var ProductorFactory = /** @class */ (function (_super) {
    __extends(ProductorFactory, _super);
    function ProductorFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductorFactory.prototype.createStaff = function (name, age, career) {
        return new Productor(name, age, career);
    };
    return ProductorFactory;
}(Factory));
var BossFactory = /** @class */ (function (_super) {
    __extends(BossFactory, _super);
    function BossFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BossFactory.prototype.createStaff = function (name, age, career) {
        return new Boss(name, age, career);
    };
    return BossFactory;
}(Factory));
var hh = new ProductorFactory();
var hhstaff = hh.createStaff("cshine", 15, "ccc");
hhstaff.applyWork();
hhstaff.sayWork();
// 抽象产品类--鼠标
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    return Mouse;
}());
// Dell鼠标
var DellMouse = /** @class */ (function (_super) {
    __extends(DellMouse, _super);
    function DellMouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DellMouse.prototype.sayHi = function () {
        console.log("This is DellMouse");
    };
    return DellMouse;
}(Mouse));
// 惠普鼠标
var HpMouse = /** @class */ (function (_super) {
    __extends(HpMouse, _super);
    function HpMouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HpMouse.prototype.sayHi = function () {
        console.log("This is HpMouse");
    };
    return HpMouse;
}(Mouse));
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
var Keybo = /** @class */ (function () {
    function Keybo() {
    }
    return Keybo;
}());
var DellKeybo = /** @class */ (function (_super) {
    __extends(DellKeybo, _super);
    function DellKeybo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DellKeybo.prototype.sayHi = function () {
        console.log("This is DellKeybo");
    };
    return DellKeybo;
}(Keybo));
var HpKeybo = /** @class */ (function (_super) {
    __extends(HpKeybo, _super);
    function HpKeybo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HpKeybo.prototype.sayHi = function () {
        console.log("This is HpKeybo");
    };
    return HpKeybo;
}(Keybo));
// pc工厂抽象类
// abstract class PcFactory {
//   abstract createMouse(): Mouse;
//   abstract createKeybo(): Keybo;
// }
// DellPc工厂
var DellPcFactory = /** @class */ (function () {
    function DellPcFactory() {
    }
    DellPcFactory.prototype.createMouse = function () {
        return new DellMouse();
    };
    DellPcFactory.prototype.createKeybo = function () {
        return new DellKeybo();
    };
    return DellPcFactory;
}());
// HpPc工厂
var HpPcFactory = /** @class */ (function () {
    function HpPcFactory() {
    }
    HpPcFactory.prototype.createMouse = function () {
        return new HpMouse();
    };
    HpPcFactory.prototype.createKeybo = function () {
        return new HpKeybo();
    };
    return HpPcFactory;
}());
var brand = "Dell";
var mf;
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
var m = mf.createMouse();
var k = mf.createKeybo();
m.sayHi();
k.sayHi();
