const user_count = 50000;
let userA = [];
let userB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User : ${id}` });

for (let i = 0; i < user_count; i++) {
  userA.push(createUser(i));
  userB.push(createUser(i + 25000));
}

const commentFriendFast = (userA, userB) => {
  const startTime = performance.now();
  const commentFriend = [];

  const idListA = new Set(userA.map((user) => user.id));

  // Removed console.log to avoid performance hit in large datasets
  userB.forEach((userB) => {
    if (idListA.has(userB.id)) {
      commentFriend.push(userB);
    }
  });

  const endTime = performance.now();

  return { count: commentFriend.length, timeTook: endTime - startTime };
};

console.log(commentFriendFast(userA, userB));