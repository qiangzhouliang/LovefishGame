//碰撞检测:判断大鱼和果实的距离
function momFruitsCollision(){
	if (!data.gameOver) {
		for (var i = 0; i < fruit.num; i++) {
			if (fruit.alive[i]) {
				//判断距离
				var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if (l < 30) {
					//果实被吃掉
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					if (mom.momBodyCount > 7) {
						mom.momBodyCount = 7;
					}
					if (fruit.fruitType[i] == "blue") {
						data.double = 2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}	
	}
}

//判断大鱼和小鱼的碰撞
function momBabyCollision(){
	if (data.fruitNum > 0 && !data.gameOver) {
		var l = calLength2(mom.x,mom.y,baby.x,baby.y);
		if (l < 30) {
			//果实被吃掉
			//小鱼复活
			baby.babyBodyCount = 0;
			mom.momBodyCount = 0;
			//更新 分数
			data.addScore();
			//绘制圆圈特效
			halo.born(baby.x,baby.y);
		}	
	}
}
