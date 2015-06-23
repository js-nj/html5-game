function enemyBorn() {
    var b, c, a = 0;
    for (b = 0; b < enemys.length; b++) null != enemys[b] && a++;
    if (5 > a && enemys.length < 20) {
        switch (c = null, enemy_loca) {
        case 1:
            c = new Born(0, 0),
            enemy_loca = 2;
            break;
        case 2:
            c = new Born(275, 0),
            enemy_loca = 3;
            break;
        case 3:
            c = new Born(550, 0),
            enemy_loca = 1;
            break;
        default:
            c = new Born(0, 0)
        }
        enemyborns.push(c)
    }
    0 >= a && enemys.length >= 20 && (verygood = !0)
}
function moveEnemyTank() {
    for (var a = 0; a < enemys.length; a++) null != enemys[a] && 0 != enemys[a].islive && (enemys[a].run(), enemys[a].attackEnemy(a))
}
function flashTankMap() {
    var a, b, c, d, e;
    for (cxt.clearRect(0, 0, 600, 500), a = 0; a < hampers.length; a++) null != hampers[a] && hampers[a].Draw();
    for (null != hero1born && (hero1born.born ? hero1born.drawBorn() : (hero1 = new Hero(hero1born.x, hero1born.y, 2, 0, heroColor1, 4), hero1born = null)), null != hero1 && 0 != hero1.islive && DrawTank(hero1), DrawBullet(), b = 0; b < enemyborns.length; b++) if (null != enemyborns[b]) if (enemyborns[b].born) enemyborns[b].drawBorn();
    else {
        switch (c = null, Math.round(3 * Math.random())) {
        case 0:
            c = new Enemy(enemyborns[b].x, enemyborns[b].y, 3, 2, enemyColor1, 1);
            break;
        case 1:
            c = new Enemy(enemyborns[b].x, enemyborns[b].y, 3, 2, enemyColor2, 1);
            break;
        case 2:
            c = new Enemy(enemyborns[b].x, enemyborns[b].y, 3, 2, enemyColor3, 1);
            break;
        case 3:
            c = new Enemy(enemyborns[b].x, enemyborns[b].y, 3, 2, enemyColor4, 1)
        }
        null != c && enemys.push(c),
        enemyborns[b] = null
    }
    for (d = 0; d < enemys.length; d++) null != enemys[d] && 0 != enemys[d].islive && DrawTank(enemys[d]);
    for (b = 0; b < tankbombs.length; b++) tankbombs[b].isLive && tankbombs[b].drawBomb();
    for (e = 0; e < enemyBulletBombs.length; e++) null != enemyBulletBombs[e] && enemyBulletBombs[e].drawBomb(),
    enemyBulletBombs[e] = null;
    null != hero1bulletBomb && (hero1bulletBomb.drawBomb(), hero1bulletBomb = null),
    DrawSymbol(),
    hitBase(),
    GameOver()
}
function getCommand() {
    if (null != hero1 && 0 != hero1.islive && !gameover) {
        var a = event.keyCode;
        switch (a) {
        case 87:
            87 == lastcode ? heroTankCollision() || hero1.moveUp() : (lastcode = 87, hero1.direct = 0);
            break;
        case 68:
            68 == lastcode ? heroTankCollision() || hero1.moveRight() : (lastcode = 68, hero1.direct = 1);
            break;
        case 83:
            83 == lastcode ? heroTankCollision() || hero1.moveDown() : (lastcode = 83, hero1.direct = 2);
            break;
        case 65:
            65 == lastcode ? heroTankCollision() || hero1.moveLeft() : (lastcode = 65, hero1.direct = 3);
            break;
        case 74:
            hero1.attackEnemy();
            break;
        case 66:
        }
        flashTankMap()
    }
}
function heroTankCollision() {
    var b, c, d, a = null;
    for (b = 0; b < enemys.length; b++) if (a = enemys[b], null != a && 0 != a.islive) switch (hero1.direct) {
    case 0:
        if (hero1.x > a.x - 50 && hero1.x < a.x + 50 && (hero1.y == a.y + 47 || hero1.y == a.y + 48 || hero1.y == a.y + 49 || hero1.y == a.y + 50)) return ! 0;
        break;
    case 1:
        if (hero1.y > a.y - 50 && hero1.y < a.y + 50 && (hero1.x + 47 == a.x || hero1.x + 50 == a.x || hero1.x + 49 == a.x || hero1.x + 48 == a.x)) return ! 0;
        break;
    case 2:
        if (hero1.x > a.x - 50 && hero1.x < a.x + 50 && (hero1.y + 47 == a.y || hero1.y + 50 == a.y || hero1.y + 49 == a.y || hero1.y + 48 == a.y)) return ! 0;
        break;
    case 3:
        if (hero1.y > a.y - 50 && hero1.y < a.y + 50 && (hero1.x == a.x + 47 || hero1.x == a.x + 50 || hero1.x == a.x + 49 || hero1.x == a.x + 48)) return ! 0
    }
    for (c = null, d = 0; d < hampers.length; d++) if (c = hampers[d], null != c) switch (hampers[d].style) {
    case 1:
        switch (hero1.direct) {
        case 0:
            if (hero1.x > c.x - 50 && hero1.x < c.x + 17 && (hero1.y == c.y + 7 || hero1.y == c.y + 8 || hero1.y == c.y + 9 || hero1.y == c.y + 10)) return ! 0;
            break;
        case 1:
            if (hero1.y > c.y - 50 && hero1.y < c.y + 10 && (hero1.x + 50 == c.x || hero1.x + 49 == c.x || hero1.x + 48 == c.x || hero1.x + 47 == c.x)) return ! 0;
            break;
        case 2:
            if (hero1.x > c.x - 50 && hero1.x < c.x + 17 && (hero1.y + 50 == c.y || hero1.y + 49 == c.y || hero1.y + 48 == c.y || hero1.y + 47 == c.y)) return ! 0;
            break;
        case 3:
            if (hero1.y > c.y - 50 && hero1.y < c.y + 10 && (hero1.x == c.x + 17 || hero1.x == c.x + 16 || hero1.x == c.x + 15 || hero1.x == c.x + 14)) return ! 0
        }
        break;
    case 2:
        switch (hero1.direct) {
        case 0:
            if (hero1.x >= c.x - 50 && hero1.x <= c.x + 17 && (hero1.y == c.y + 14 || hero1.y == c.y + 15 || hero1.y == c.y + 16 || hero1.y == c.y + 17)) return ! 0;
            break;
        case 1:
            if (hero1.y > c.y - 50 && hero1.y < c.y + 10 && (hero1.x + 50 == c.x || hero1.x + 49 == c.x || hero1.x + 48 == c.x || hero1.x + 47 == c.x)) return ! 0;
            break;
        case 2:
            if (hero1.x > c.x - 50 && hero1.x < c.x + 17 && (hero1.y + 50 == c.y || hero1.y + 49 == c.y || hero1.y + 48 == c.y || hero1.y + 47 == c.y)) return ! 0;
            break;
        case 3:
            if (hero1.y > c.y - 50 && hero1.y < c.y + 10 && (hero1.x == c.x + 17 || hero1.x == c.x + 16 || hero1.x == c.x + 15 || hero1.x == c.x + 14)) return ! 0
        }
        break;
    case 3:
        break;
    case 4:
    }
}
