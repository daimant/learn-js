let root = {
    val: 3, next: {
        val: 5, next: {
            val: 2, next: null,
        }
    }
};

const open = root => !root ? [] : [root.val, ...open(root.next)];

console.log(open(root));

