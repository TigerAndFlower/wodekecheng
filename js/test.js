class Api {
    constructor() {
        this.user = {
            id: 1,
            name: 'test'
        };
        this.friends = [this.user, this.user, this.user];
        this.photo = 'not a real photo'
    }
    getUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.user)
            }, 200)
        })
    }
    getFriends(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.friends.slice())
            }, 200)
        })
    }
    getPhoto(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.photo)
            }, 200)
        })
    }
    throwError() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Intentional Error'))
            }, 200)
        })
    }
}

// for Promise
function promiseChain() {
    const api = new Api();
    let user, friends;
    api.getUser()
        .then((returnedUser) => {
            user = returnedUser;
            return api.getFriends(user.id)
        })
        .then((returnedFriends)=>{
            friends = returnedFriends;
            return api.getPhoto(user.id)
        })
        .then((photo)=>{
            console.log(`promiseChain`,{user, friends, photo});
        })
}

// for Asyns/Await
async function asyncAwaitPractice(){
    const api = new Api();
    const user = await api.getuser();
}

// 节流函数
function throttle (fn, wait) {
    let _fn = fn, // 保存需要被延迟的函数引用
        timer,
        flags = true;
    return function(){
        let args = arguments,
            self = this;
            if(flags){ // 如果第一次调用不用延迟，直接执行即可
                _fn.apply(self, args);
                flags = false;
                return flags;
            }
            // 如果定时器还在，说明上一次还没执行完，不往下执行
            if(timer) return false;

            timer = setTimeout(() => {
               clearTimeout(timer);
               timer = null;
               _fn.apply(self, args); 
            }, wait);
    }
}

