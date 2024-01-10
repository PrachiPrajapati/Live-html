const socket=io(sRootUrl, {
    transports: ['websocket', 'polling'],
    query: {
        authorization,
    },
});