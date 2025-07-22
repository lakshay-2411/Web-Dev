async function myFunction() {
    try {
        let result1;
        try {
            result1 = await riskyOperation1();
        } catch (error) {
            console.log('Operation 1 failed, using fallback');
            result1 = { fallback: true };
        }
        
        const result2 = await riskyOperation2(result1);
        
        if (result2.needsProcessing) {
            const processed = await processResult(result2);
            return processed;
        }
        
        return result2;
        
    } catch (error) {
        console.error('Unhandled error:', error);
        return { error: true, message: error.message };
    }
}

async function riskyOperation1() {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (Math.random() < 0.3) {
        throw new Error('Random failure in operation 1');
    }
    return { data: 'success1', needsProcessing: Math.random() < 0.5 };
}

async function riskyOperation2(input) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { ...input, data2: 'success2' };
}

async function processResult(result) {
    await new Promise(resolve => setTimeout(resolve, 200));
    return { ...result, processed: true };
}

myFunction().then(console.log);