/*
voodoo.js A JavaScript framework
language: JavaScript
version: 0.1
author: mystikkogames ( mystikkogames@protonmail.com )
license: GPLv3
*/
function Exampler() {	
	var print = voodoo.print;
	var assert = voodoo.assert;
	
	this.n = 0;	
		
	this.example = (text, evaluate = 1) => {
		var classt = this.n % 2 === 0 ? "everyother" : "";
		var val = "";
		if (evaluate) val = " // " + eval(text);
		voodoo("#unittests").query().append_html(`<li><a href=\"#${this.n + 1}\" class=\"${classt}\">${this.n + 1}. ${text} ${val}</a></li>`);
		this.n++;	
	};
	
	this.unittests = () => {	
		assert(voodoo(42).multiply(2).get() == 2 * 42);		
		assert(voodoo(100).sqrt().get() == 10);
		assert(voodoo(42).divide(2).get() == 42 / 2);
		assert(voodoo("1 + 1").eval().get() == 2);	
		assert(voodoo(100).sqrt().get() == 10);		
		assert(voodoo(42).multiply(2).get() == 2 * 42);		
		assert(voodoo(42).divide(2).get() == 42 / 2);			
		var c = voodoo({re: 2, im: 5}).minus_complex(1, 3).get(); assert(c.re == 1 && c.im == 2);
		c = voodoo([{re: 2, im: 5}, {re: 1, im: 7}]).minus_complex(1, 3).get(1); assert(c.re === 0 && c.im === 4);		
		assert(voodoo().range(4, 6).len() == 2);	
		assert(voodoo(42*42).sqrt().get() == 42);		
		assert(voodoo([2, 3]).each(x => {return 2 * x;}).sum().get() == 10);		
		assert(voodoo({a:34, b:77}).extend({b:42}).get().b == 42);			
		assert(voodoo({a:34, b:77}).extend({a:42}).get().a == 42);		
		assert(voodoo({a:34, b:77}).extend({x:42}).get().x == 42);		
		assert(voodoo([9, 16]).sqrt().sum().get() == 7);
		assert(voodoo([1, 2, 3]).plus(1).sum().get() == 9);		
		assert(voodoo([25, 9, 16]).sqrt().sum().get() == 12);	
		assert(voodoo.stringify_complex({re: 2, im: -5}) == "2 -5i");			
		assert(voodoo("1 + 1").eval().get() == 2);	
		assert(voodoo("1 / 1").eval().get() == 1);	
		assert(voodoo([3, 5, 7]).each((v) => {return 2 * v;}).sum().get() == 2*3 + 2*5 + 2*7);	
		assert(voodoo(10).average().get() == 10);	
		assert(voodoo(["1 / 1", "2"]).eval().get() == 1);	
		assert(voodoo.eval("1 / 1") == 1);	
		assert(voodoo("1 / 2").eval().to_precision(2).get() == 0.5);	
		assert(voodoo("42 / 2").eval().to_precision(3).get() == 21);	
		assert(voodoo(["1", "2"]).eval().sum().get() == 3);			
		assert(voodoo("2^2/4*pi*e").eval().to_precision(6).get() == 8.53973);			
		assert(voodoo("3^2^2*pi").eval().to_precision(6).get() == 254.469);			
		assert(voodoo("3*4.25/7/3.2*3.21^2^2").eval().to_precision(4).get() == 60.43);	
		assert(voodoo("3*4.25/7/3.2").eval().to_precision(3).get() == 0.569);	
		assert(voodoo("9*8/9-3+2").eval().to_precision(3).get() == 7);	
		assert(voodoo("6*8/9-3+2").eval().to_precision(2).get() == 4.3);
		assert(voodoo("3+4*2/(1-5)^2^3").eval().to_precision(6).get() == 3.00012);			
		print("voodoo unittests OK!");
		return this;
	};
	
	this.docs = () => {		
		var e = voodoo().timer_start();
		this.n = 0;
		this.example("voodoo(\"2.3\") // set value", 0);			
		this.example("voodoo(\"2.3\").get()");
		this.example("voodoo(\"12.12345\").to_precision(3).get()");
		this.example("voodoo(\"1.945678\").to_precision(3).get()");	
		this.example("voodoo(\"1 + 1\").eval().get()");	
		this.example("voodoo(\"3*4.25/7/3.2*3.21^2^2\").eval().to_precision(4).get()");	
		this.example("voodoo(7.6).floor().get()");
		this.example("voodoo(7.6).ceil().get()");		
		this.example("voodoo(-7.6).abs().get()");	
		this.example("voodoo([-2, -4, -6]).sum().get()");		
		this.example("voodoo([-2, -4, -6]).abs().sum().get()");		
		this.example("voodoo(9).sqrt().get()");
		this.example("voodoo([9, 16]).sqrt().get()");
		this.example("voodoo([9, 16]).sqrt().sum().get()");
		this.example("voodoo([2, 3, 4]).dot_product().get()");
		this.example("voodoo(4).dot_product().get()");
		this.example("voodoo(0.12).asin().get()");	
		this.example("voodoo(0.12).cos().sin().abs().to_precision(4).get()");
		this.example("voodoo(voodoo.PI/2).sin().get()");
		this.example("voodoo(voodoo.PI/2).cos().to_precision(3).get()");	
		this.example("voodoo(0.1).asin().to_precision(3).get()");	
		this.example("voodoo([1,2,10]).average().plus(voodoo([3,10]).average().get()).get()");	
		this.example("voodoo([-21,2,10]).average().get()");			
		this.example("voodoo([-21,2,10]).keys().v");	
		this.example("voodoo([-21,2,10]).values().v");					
		this.example("voodoo({a: 21, b: 2, c: 10}).keys().v");			
		this.example("voodoo({a: 21, b: 2, c: 10}).values().v");					
		this.example("voodoo().random().multiply(10).get()");	
		this.example("voodoo().random(3, 5).get()");		
		this.example("voodoo([1,2]).random(3, 5).v");		
		this.example("voodoo([-21,2,10]).keys().numerize().sum().get()");					
		this.example("voodoo(-21).abs().cos().get()");		
		this.example("voodoo([22, 43, 77]).values().get()");	
		this.example("voodoo(10).plus(10).plus(20).get()");
		this.example("voodoo(10).plus(10).plus(20).minus(100).get()");		
		this.example("voodoo([\"abcedfg\", \"ss\"]).slice(2).get()");	
		this.example("voodoo([\"abcedfg\", \"0123456\"]).slice(1).sum().get()");		
		this.example("voodoo([\"abcedfg\", \"ss\"]).sum().get()");	
		this.example("voodoo(\"abcedfg\").slice(2, 4).get()");
		this.example("voodoo([[1, 2, 3, 4, 5]]).slice(1, 3).get()");
		this.example("voodoo([12, 55]).dot_product().get()");
		this.example("voodoo(12).dot_product().get()");		
		this.example(`= ${e.timer_end().time_since().get()}`, 0);		
		return this;
	};
}

