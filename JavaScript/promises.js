function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Step 1: Fetching user data...');
            resolve({ userId: 123, name: 'John Doe' });
        }, 1000);
    });
}

function step2(userData) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Step 2: Fetching user preferences...');
            resolve({
                ...userData,
                preferences: { theme: 'dark', language: 'en' }
            });
        }, 800);
    });
}

function step3(userWithPrefs) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Step 3: Fetching user posts...');
            resolve({
                ...userWithPrefs,
                posts: ['Post 1', 'Post 2', 'Post 3']
            });
        }, 600);
    });
}

step1()
    .then(userData => {
        console.log('Got user data:', userData);
        return step2(userData);
    })
    .then(userWithPrefs => {
        console.log('Got preferences:', userWithPrefs);
        return step3(userWithPrefs);
    })
    .then(completeUser => {
        console.log('Complete user profile:', completeUser);
    })
    .catch(error => {
        console.error('Pipeline failed:', error);
    });