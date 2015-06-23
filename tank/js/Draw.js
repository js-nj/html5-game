function Born(a, b) {
    this.x = a,
    this.y = b,
    this.time = 0,
    this.born = !0,
    this.drawBorn = function() {
        this.time <= 1 && cxt.drawImage(born1, this.x, this.y, 50, 50),
        this.time > 1 && this.time <= 3 && cxt.drawImage(born2, this.x, this.y, 50, 50),
        this.time >= 4 && this.time <= 5 && cxt.drawImage(born3, this.x, this.y, 50, 50),
        this.time >= 6 && this.time <= 7 && cxt.drawImage(born4, this.x, this.y, 50, 50),
        this.time >= 8 && this.time <= 9 && cxt.drawImage(born2, this.x, this.y, 50, 50),
        this.time >= 10 && this.time <= 11 && cxt.drawImage(born3, this.x, this.y, 50, 50),
        this.time >= 12 && this.time <= 13 && cxt.drawImage(born4, this.x, this.y, 50, 50),
        this.time++,
        this.time >= 13 && (this.born = !1, this.time = 0)
    }
}
function Tank(a, b, c, d, e, f) {
    this.x = a,
    this.y = b,
    this.speed = c,
    this.direct = d,
    this.tankcolor = e,
    this.islive = f,
    this.moveUp = function() {
        this.y = this.y - this.speed,
        this.y <= 0 && (this.y = 0),
        this.direct = 0
    },
    this.moveDown = function() {
        this.y = this.y + this.speed,
        this.y >= 450 && (this.y = 450),
        this.direct = 2
    },
    this.moveLeft = function() {
        this.x = this.x - this.speed,
        this.x <= 0 && (this.x = 0),
        this.direct = 3
    },
    this.moveRight = function() {
        this.x = this.x + this.speed,
        this.x >= 550 && (this.x = 550),
        this.direct = 1
    }
}
function Hero(a, b, c, d, e, f) {
    this.tank = Tank,
    this.tank(a, b, c, d, e, f),
    this.attackEnemy = function() {
        if (null == hero1bullet) {
            switch (this.direct) {
            case 0:
                hero1bullet = new Bullet(this.x + 24, this.y, 4, 0);
                break;
            case 1:
                hero1bullet = new Bullet(this.x + 50, this.y + 24, 4, 1);
                break;
            case 2:
                hero1bullet = new Bullet(this.x + 24, this.y + 50, 4, 2);
                break;
            case 3:
                hero1bullet = new Bullet(this.x, this.y + 24, 4, 3)
            }
            hero1bullet.time = window.setInterval("hero1bullet.run('h')", 20)
        }
    }
}
function Enemy(a, b, c, d, e, f) {
    this.tank = Tank,
    this.tank(a, b, c, d, e, f),
    this.run = function() {
        if (0 != this.islive) switch (this.changeDir(), this.direct) {
        case 0:
            this.y <= 0 && this.beyondChange(),
            this.enemyTankCollision(this) || this.moveUp();
            break;
        case 1:
            this.x >= 550 && this.beyondChange(),
            this.enemyTankCollision(this) || this.moveRight();
            break;
        case 2:
            this.y >= 450 && this.beyondChange(),
            this.enemyTankCollision(this) || this.moveDown();
            break;
        case 3:
            this.x <= 0 && this.beyondChange(),
            this.enemyTankCollision(this) || this.moveLeft()
        }
    },
    this.changeDir = function() {
        var a = Math.round(99 * Math.random());
        4 > a && (this.direct = Math.round(3 * Math.random()))
    },
    this.beyondChange = function() {
        this.direct = Math.round(3 * Math.random())
    },
    this.attackEnemy = function(a) {
        if (null == enemyBullets[a] && Math.round(99 * Math.random()) < 4) {
            switch (this.direct) {
            case 0:
                enemyBullets[a] = new Bullet(this.x + 24, this.y, 4, 0);
                break;
            case 1:
                enemyBullets[a] = new Bullet(this.x + 50, this.y + 24, 4, 1);
                break;
            case 2:
                enemyBullets[a] = new Bullet(this.x + 24, this.y + 50, 4, 2);
                break;
            case 3:
                enemyBullets[a] = new Bullet(this.x, this.y + 24, 4, 3)
            }
            enemyBullets[a].time = window.setInterval("enemyBullets[" + a + "].run(" + a + ")", 20)
        }
    },
    this.enemyTankCollision = function(a) {
        var c, d, e, b = null;
        for (c = 0; c < enemys.length; c++) if (b = enemys[c], null != b && 0 != b.islive) switch (a.direct) {
        case 0:
            if (null != hero1 && 0 != hero1.islive && a.x > hero1.x - 50 && a.x < hero1.x + 50 && (a.y == hero1.y + 47 || a.y == hero1.y + 50 || a.y == hero1.y + 49 || a.y == hero1.y + 48)) return ! 0;
            if (a.x > b.x - 50 && a.x < b.x + 50 && (a.y == b.y + 47 || a.y == b.y + 50 || a.y == b.y + 49 || a.y == b.y + 48)) return ! 0;
            break;
        case 1:
            if (null != hero1 && 0 != hero1.islive && a.y > hero1.y - 50 && a.y < hero1.y + 50 && (a.x + 47 == hero1.x || a.x + 50 == hero1.x || a.x + 49 == hero1.x || a.x + 48 == hero1.x)) return ! 0;
            if (a.y > b.y - 50 && a.y < b.y + 50 && (a.x + 47 == b.x || a.x + 50 == b.x || a.x + 49 == b.x || a.x + 48 == b.x)) return ! 0;
            break;
        case 2:
            if (null != hero1 && 0 != hero1.islive && a.x > hero1.x - 50 && a.x < hero1.x + 50 && (a.y == hero1.y - 47 || a.y == hero1.y - 50 || a.y == hero1.y - 49 || a.y == hero1.y - 48)) return ! 0;
            if (a.x > b.x - 50 && a.x < b.x + 50 && (a.y == b.y - 47 || a.y == b.y - 50 || a.y == b.y - 49 || a.y == b.y - 48)) return ! 0;
            break;
        case 3:
            if (null != hero1 && 0 != hero1.islive && a.y > hero1.y - 50 && a.y < hero1.y + 50 && (a.x - 47 == hero1.x || a.x - 50 == hero1.x || a.x - 49 == hero1.x || a.x - 48 == hero1.x)) return ! 0;
            if (a.y > b.y - 50 && a.y < b.y + 50 && (a.x - 47 == b.x || a.x - 50 == b.x || a.x - 49 == b.x || a.x - 48 == b.x)) return ! 0
        }
        for (d = null, e = 0; e < hampers.length; e++) if (d = hampers[e], null != d) switch (hampers[e].style) {
        case 1:
            switch (a.direct) {
            case 0:
                if (a.x >= d.x - 50 && a.x <= d.x + 17 && (a.y == d.y + 7 || a.y == d.y + 8 || a.y == d.y + 9 || a.y == d.y + 10)) return ! 0;
                break;
            case 1:
                if (a.y > d.y - 50 && a.y < d.y + 10 && (a.x + 50 == d.x || a.x + 49 == d.x || a.x + 48 == d.x || a.x + 47 == d.x)) return ! 0;
                break;
            case 2:
                if (a.x > d.x - 50 && a.x < d.x + 17 && (a.y + 50 == d.y || a.y + 49 == d.y || a.y + 48 == d.y || a.y + 47 == d.y)) return ! 0;
                break;
            case 3:
                if (a.y > d.y - 50 && a.y < d.y + 10 && (a.x == d.x + 17 || a.x == d.x + 16 || a.x == d.x + 15 || a.x == d.x + 14)) return ! 0
            }
            break;
        case 2:
            switch (a.direct) {
            case 0:
                if (a.x >= d.x - 50 && a.x <= d.x + 17 && (a.y == d.y + 14 || a.y == d.y + 15 || a.y == d.y + 16 || a.y == d.y + 17)) return ! 0;
                break;
            case 1:
                if (a.y > d.y - 50 && a.y < d.y + 10 && (a.x + 50 == d.x || a.x + 49 == d.x || a.x + 48 == d.x || a.x + 47 == d.x)) return ! 0;
                break;
            case 2:
                if (a.x > d.x - 50 && a.x < d.x + 17 && (a.y + 50 == d.y || a.y + 49 == d.y || a.y + 48 == d.y || a.y + 47 == d.y)) return ! 0;
                break;
            case 3:
                if (a.y > d.y - 50 && a.y < d.y + 10 && (a.x == d.x + 17 || a.x == d.x + 16 || a.x == d.x + 15 || a.x == d.x + 14)) return ! 0
            }
            break;
        case 3:
            break;
        case 4:
        }
    }
}
function Bullet(a, b, c, d) {
    this.x = a,
    this.y = b,
    this.speed = c,
    this.direct = d,
    this.time = null,
    this.islive = !0,
    this.run = function(a) {
        if ((this.x >= 600 || this.x <= 0 || this.y >= 500 || this.y <= 0) && this.islive) if (window.clearInterval(this.time), this.islive = !1, "h" == a) switch (hero1bullet = null, this.direct) {
        case 0:
            hero1bulletBomb = new bulletBomb(this.x - 68, this.y - 50);
            break;
        case 1:
            hero1bulletBomb = new bulletBomb(this.x - 68, this.y - 54);
            break;
        case 2:
            hero1bulletBomb = new bulletBomb(this.x - 68, this.y - 54);
            break;
        case 3:
            hero1bulletBomb = new bulletBomb(this.x - 68, this.y - 52)
        } else switch (enemyBullets[a] = null, this.direct) {
        case 0:
            enemyBulletBombs[a] = new bulletBomb(this.x - 68, this.y - 50);
            break;
        case 1:
            enemyBulletBombs[a] = new bulletBomb(this.x - 68, this.y - 54);
            break;
        case 2:
            enemyBulletBombs[a] = new bulletBomb(this.x - 68, this.y - 54);
            break;
        case 3:
            enemyBulletBombs[a] = new bulletBomb(this.x - 68, this.y - 52)
        } else switch (this.direct) {
        case 0:
            this.y = this.y - this.speed;
            break;
        case 1:
            this.x = this.x + this.speed;
            break;
        case 2:
            this.y = this.y + this.speed;
            break;
        case 3:
            this.x = this.x - this.speed
        }
    }
}
function DrawTank(a) {
    switch (a.direct) {
    case 0:
    case 2:
        cxt.beginPath(),
        cxt.fillStyle = a.tankcolor[0],
        cxt.fillRect(a.x, a.y, 11, 50),
        cxt.fillRect(a.x + 12, a.y + 10, 26, 30),
        cxt.fillRect(a.x + 39, a.y, 11, 50),
        cxt.fillStyle = a.tankcolor[1],
        cxt.arc(a.x + 25, a.y + 25, 10, 360, 0, !0),
        cxt.fill(),
        cxt.closePath(),
        cxt.beginPath(),
        cxt.strokeStyle = a.tankcolor[1],
        cxt.lineWidth = 2,
        cxt.moveTo(a.x + 25, a.y + 25),
        0 == a.direct ? cxt.lineTo(a.x + 25, a.y + 0) : 2 == a.direct && cxt.lineTo(a.x + 25, a.y + 50),
        cxt.closePath(),
        cxt.stroke();
        break;
    case 1:
    case 3:
        cxt.beginPath(),
        cxt.fillStyle = a.tankcolor[0],
        cxt.fillRect(a.x, a.y, 50, 11),
        cxt.fillRect(a.x + 10, a.y + 12, 30, 26),
        cxt.fillRect(a.x, a.y + 39, 50, 11),
        cxt.fillStyle = a.tankcolor[1],
        cxt.arc(a.x + 25, a.y + 25, 10, 360, 0, !0),
        cxt.fill(),
        cxt.closePath(),
        cxt.beginPath(),
        cxt.strokeStyle = a.tankcolor[1],
        cxt.lineWidth = 2,
        cxt.moveTo(a.x + 25, a.y + 25),
        1 == a.direct ? cxt.lineTo(a.x + 50, a.y + 25) : 3 == a.direct && cxt.lineTo(a.x, a.y + 25),
        cxt.closePath(),
        cxt.stroke()
    }
}
function Hamper(a, b, c) {
    this.x = a,
    this.y = b,
    this.style = c,
    this.Draw = function() {
        switch (this.style) {
        case 1:
            cxt.fillStyle = "#bc5018",
            cxt.fillRect(this.x, this.y, 17, 10);
            break;
        case 2:
            cxt.fillStyle = "#ffffff",
            cxt.fillRect(this.x, this.y, 17, 17);
            break;
        case 3:
            break;
        case 4:
        }
    }
}
function DrawBullet() {
    var b, a = null;
    for (cxt.fillStyle = "#ba9658", b = 0; b < enemyBullets.length; b++) if (a = enemyBullets[b], null != a && a.islive) switch (a.direct) {
    case 0:
    case 2:
        cxt.fillRect(a.x, a.y, 2, 3);
        break;
    case 1:
    case 3:
        cxt.fillRect(a.x, a.y, 3, 2)
    }
    if (null != hero1bullet && hero1bullet.islive) switch (hero1bullet.direct) {
    case 0:
    case 2:
        cxt.fillRect(hero1bullet.x, hero1bullet.y, 2, 3);
        break;
    case 1:
    case 3:
        cxt.fillRect(hero1bullet.x, hero1bullet.y, 3, 2)
    }
}
function DrawSymbol() {
    cxt.beginPath(),
    gameover ? cxt.drawImage(base2, 280, 450, 50, 50) : cxt.drawImage(base1, 280, 450, 50, 50),
    cxt.closePath()
}
function hitTank() {
    var a, b, c, d, e, f;
    for (a = 0; a < enemyBullets.length; a++) if (null != hero1 && 0 != hero1.islive && null != enemyBullets[a]) {
        switch (enemyBullets[a].direct) {
        case 0:
            enemyBullets[a].x + 2 >= hero1.x && enemyBullets[a].x + 2 <= hero1.x + 50 && enemyBullets[a].y + 3 <= hero1.y + 50 && enemyBullets[a].y + 3 >= hero1.y && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBullets[a] = null, hero1.islive--);
            break;
        case 1:
            enemyBullets[a].x + 3 >= hero1.x && enemyBullets[a].x + 3 <= hero1.x + 50 && enemyBullets[a].y + 2 >= hero1.y && enemyBullets[a].y + 2 <= hero1.y + 50 && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBullets[a] = null, hero1.islive--);
            break;
        case 2:
            enemyBullets[a].x + 2 >= hero1.x && enemyBullets[a].x + 2 <= hero1.x + 50 && enemyBullets[a].y + 3 <= hero1.y + 50 && enemyBullets[a].y + 3 >= hero1.y && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBullets[a] = null, hero1.islive--);
            break;
        case 3:
            enemyBullets[a].x <= hero1.x + 50 && enemyBullets[a].x >= hero1.x && enemyBullets[a].y + 2 >= hero1.y && enemyBullets[a].y + 2 <= hero1.y + 50 && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBullets[a] = null, hero1.islive--)
        }
        0 == hero1.islive && (b = new TankBomb(hero1.x, hero1.y), tankbombs.push(b), hero1 = null, null == hero1 && (gameover = !0))
    }
    for (c = null, d = null, a = 0; a < enemyBullets.length; a++) if (c = enemyBullets[a], null != c) for (e = 0; e < hampers.length; e++) if (d = hampers[e], null != d && null != c) switch (c.direct) {
    case 0:
        switch (d.style) {
        case 1:
            c.x >= d.x - 1 && c.x <= d.x + 17 && c.y <= d.y + 10 && c.y >= d.y && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBulletBombs[a] = new bulletBomb(c.x - 68, c.y - 50), enemyBullets[a] = null, hampers[e] = null);
            break;
        case 2:
            c.x >= d.x - 1 && c.x <= d.x + 17 && c.y <= d.y + 20 && c.y >= d.y && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBulletBombs[a] = new bulletBomb(c.x - 68, c.y - 50), enemyBullets[a] = null)
        }
        break;
    case 1:
        switch (d.style) {
        case 1:
            c.x >= d.x && c.x <= d.x + 17 && c.y <= d.y + 10 && c.y >= d.y - 1 && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBulletBombs[a] = new bulletBomb(c.x - 68, c.y - 50), enemyBullets[a] = null, hampers[e] = null);
            break;
        case 2:
            c.x >= d.x && c.x <= d.x + 17 && c.y <= d.y + 17 && c.y >= d.y - 1 && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBulletBombs[a] = new bulletBomb(c.x - 68, c.y - 50), enemyBullets[a] = null)
        }
        break;
    case 2:
        switch (d.style) {
        case 1:
            c.x >= d.x - 1 && c.x <= d.x + 17 && c.y + 2 <= d.y + 10 && c.y + 2 >= d.y && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBulletBombs[a] = new bulletBomb(c.x - 68, c.y - 50), enemyBullets[a] = null, hampers[e] = null);
            break;
        case 2:
            c.x >= d.x - 1 && c.x <= d.x + 17 && c.y + 2 <= d.y + 17 && c.y + 2 >= d.y && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBulletBombs[a] = new bulletBomb(c.x - 68, c.y - 50), enemyBullets[a] = null)
        }
        break;
    case 3:
        switch (d.style) {
        case 1:
            c.x >= d.x && c.x <= d.x + 17 && c.y + 1 <= d.y + 10 && c.y + 1 >= d.y && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBulletBombs[a] = new bulletBomb(c.x - 68, c.y - 50), enemyBullets[a] = null, hampers[e] = null);
            break;
        case 2:
            c.x >= d.x && c.x <= d.x + 17 && c.y + 1 <= d.y + 20 && c.y + 1 >= d.y && (enemyBullets[a].islive = !1, window.clearInterval(enemyBullets[a].time), enemyBulletBombs[a] = new bulletBomb(c.x - 68, c.y - 50), enemyBullets[a] = null)
        }
    }
    if (null != hero1bullet) {
        for (f = 0; f < enemys.length; f++) if (null != enemys[f] && 0 != enemys[f].islive && null != hero1bullet) {
            switch (hero1bullet.direct) {
            case 0:
                hero1bullet.x + 2 >= enemys[f].x && hero1bullet.x + 2 <= enemys[f].x + 50 && hero1bullet.y + 3 <= enemys[f].y + 50 && hero1bullet.y + 3 >= enemys[f].y && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bullet = null, enemys[f].islive--);
                break;
            case 1:
                hero1bullet.x + 3 >= enemys[f].x && hero1bullet.x + 3 <= enemys[f].x + 50 && hero1bullet.y + 2 >= enemys[f].y && hero1bullet.y + 2 <= enemys[f].y + 50 && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bullet = null, enemys[f].islive--);
                break;
            case 2:
                hero1bullet.x + 2 >= enemys[f].x && hero1bullet.x + 2 <= enemys[f].x + 50 && hero1bullet.y + 3 <= enemys[f].y + 50 && hero1bullet.y + 3 >= enemys[f].y && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bullet = null, enemys[f].islive--);
                break;
            case 3:
                hero1bullet.x <= enemys[f].x + 50 && hero1bullet.x >= enemys[f].x && hero1bullet.y + 2 >= enemys[f].y && hero1bullet.y + 2 <= enemys[f].y + 50 && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bullet = null, enemys[f].islive--)
            }
            0 == enemys[f].islive && (b = new TankBomb(enemys[f].x, enemys[f].y), tankbombs.push(b), enemys[f] = null)
        }
        for (d = null, e = 0; e < hampers.length; e++) if (d = hampers[e], null != d && null != hero1bullet) switch (hero1bullet.direct) {
        case 0:
            switch (d.style) {
            case 1:
                hero1bullet.x >= d.x - 1 && hero1bullet.x <= d.x + 17 && hero1bullet.y <= d.y + 10 && hero1bullet.y >= d.y && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bulletBomb = new bulletBomb(hero1bullet.x - 68, hero1bullet.y - 50), hero1bullet = null, hampers[e] = null);
                break;
            case 2:
                hero1bullet.x >= d.x - 1 && hero1bullet.x <= d.x + 17 && hero1bullet.y <= d.y + 20 && hero1bullet.y >= d.y && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bulletBomb = new bulletBomb(hero1bullet.x - 68, hero1bullet.y - 50), hero1bullet = null)
            }
            break;
        case 1:
            switch (d.style) {
            case 1:
                hero1bullet.x >= d.x && hero1bullet.x <= d.x + 17 && hero1bullet.y <= d.y + 10 && hero1bullet.y >= d.y - 1 && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bulletBomb = new bulletBomb(hero1bullet.x - 68, hero1bullet.y - 50), hero1bullet = null, hampers[e] = null);
                break;
            case 2:
                hero1bullet.x >= d.x && hero1bullet.x <= d.x + 17 && hero1bullet.y <= d.y + 17 && hero1bullet.y >= d.y - 1 && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bulletBomb = new bulletBomb(hero1bullet.x - 68, hero1bullet.y - 50), hero1bullet = null)
            }
            break;
        case 2:
            switch (d.style) {
            case 1:
                hero1bullet.x >= d.x - 1 && hero1bullet.x <= d.x + 17 && hero1bullet.y + 2 <= d.y + 10 && hero1bullet.y + 2 >= d.y && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bulletBomb = new bulletBomb(hero1bullet.x - 68, hero1bullet.y - 50), hero1bullet = null, hampers[e] = null);
                break;
            case 2:
                hero1bullet.x >= d.x - 1 && hero1bullet.x <= d.x + 17 && hero1bullet.y + 2 <= d.y + 17 && hero1bullet.y + 2 >= d.y && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bulletBomb = new bulletBomb(hero1bullet.x - 68, hero1bullet.y - 50), hero1bullet = null)
            }
            break;
        case 3:
            switch (d.style) {
            case 1:
                hero1bullet.x >= d.x && hero1bullet.x <= d.x + 17 && hero1bullet.y + 1 <= d.y + 10 && hero1bullet.y + 1 >= d.y && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bulletBomb = new bulletBomb(hero1bullet.x - 68, hero1bullet.y - 50), hero1bullet = null, hampers[e] = null);
                break;
            case 2:
                hero1bullet.x >= d.x && hero1bullet.x <= d.x + 17 && hero1bullet.y + 1 <= d.y + 20 && hero1bullet.y + 1 >= d.y && (hero1bullet.islive = !1, window.clearInterval(hero1bullet.time), hero1bulletBomb = new bulletBomb(hero1bullet.x - 68, hero1bullet.y - 50), hero1bullet = null)
            }
        }
    }
}
function TankBomb(a, b) {
    this.x = a,
    this.y = b,
    this.time = 0,
    this.imgsrc = "",
    this.isLive = !0,
    this.drawBomb = function() {
        this.time <= 2 && cxt.drawImage(bomb3, this.x, this.y, 50, 50),
        this.time > 2 && this.time <= 5 && cxt.drawImage(bomb2, this.x, this.y, 50, 50),
        this.time >= 6 && this.time <= 9 && cxt.drawImage(bomb1, this.x, this.y, 50, 50),
        this.time >= 10 && this.time <= 12 && cxt.drawImage(bomb2, this.x, this.y, 50, 50),
        this.time >= 13 && this.time <= 15 && cxt.drawImage(bomb3, this.x, this.y, 50, 50),
        this.time++,
        this.time >= 15 && (this.isLive = !1, this.time = 0)
    }
}
function bulletBomb(a, b) {
    this.x = a,
    this.y = b,
    this.drawBomb = function() {
        cxt.drawImage(buBoImg, this.x, this.y)
    }
}
function hitBase() {
    var a, b;
    if (!gameover) {
        for (a = null, b = 0; b < enemyBullets.length; b++) if (a = enemyBullets[b], null != a) switch (a.direct) {
        case 0:
            break;
        case 1:
            a.x >= 280 && a.x <= 330 && a.y + 1 >= 450 && a.y <= 500 && (gameover = !0, enemyBullets[b] = null);
            break;
        case 2:
            a.x + 1 >= 280 && a.x <= 330 && a.y + 2 >= 450 && a.y + 2 <= 500 && (gameover = !0, enemyBullets[b] = null);
            break;
        case 3:
            a.x >= 280 && a.x <= 330 && a.y + 1 >= 450 && a.y <= 500 && (gameover = !0, enemyBullets[b] = null)
        }
        if (null != hero1bullet) switch (hero1bullet.direct) {
        case 0:
            break;
        case 1:
            hero1bullet.x >= 280 && hero1bullet.x <= 330 && hero1bullet.y + 1 >= 450 && hero1bullet.y <= 500 && (gameover = !0, window.clearInterval(hero1bullet.time), hero1bullet = null);
            break;
        case 2:
            hero1bullet.x + 1 >= 280 && hero1bullet.x <= 330 && hero1bullet.y + 2 >= 450 && hero1bullet.y + 2 <= 500 && (gameover = !0, window.clearInterval(hero1bullet.time), hero1bullet = null);
            break;
        case 3:
            hero1bullet.x >= 280 && hero1bullet.x <= 330 && hero1bullet.y + 1 >= 450 && hero1bullet.y <= 500 && (gameover = !0, window.clearInterval(hero1bullet.time), hero1bullet = null)
        }
    }
}
function GameOver() {
    return gameY > 193 && (gameY -= 4),
    verygood ? (cxt.beginPath(), cxt.fillStyle = "#CCCCCC", cxt.fillRect(190, gameY, 215, 115), cxt.closePath(), cxt.beginPath(), cxt.fillStyle = "#ff0000", cxt.font = "35px Engravers MT", cxt.fillText("V E R Y", 212, gameY + 57), cxt.fillText("G O O D", 212, gameY + 90), cxt.closePath(), void 0) : (gameover && (cxt.beginPath(), cxt.fillStyle = "#CCCCCC", cxt.fillRect(190, gameY, 215, 115), cxt.closePath(), cxt.beginPath(), cxt.fillStyle = "#ff0000", cxt.font = "35px Engravers MT", cxt.fillText("G A M E", 212, gameY + 57), cxt.fillText("O V E  R", 212, gameY + 90), cxt.closePath()), void 0)
}



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
