useStatus(() => {
    API.subscribeToStatus(personId, handleStatusChange);

    return function cleanup() {
        API.unsubscribeFromStatus(personId, handleStatusChange);
    };
});