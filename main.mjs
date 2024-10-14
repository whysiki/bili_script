import { modify_follow } from "./unfollow.mjs";
import { getFollowsCount, getFollows } from "./getfollows.mjs";
import fs from "fs";
const main = async () => {
  const default_follow_number = await getFollowsCount().then(
    (data) => data.find((item) => item.name === "默认分组").count
  );
  const separate_number = 20;
  const page_number = Math.ceil(default_follow_number / separate_number);
  let followersData = [];
  if (fs.existsSync("followers.json")) {
    followersData = JSON.parse(fs.readFileSync("followers.json"));
  } else {
    for (let i = 1; i <= page_number; i++) {
      const follow_list = await getFollows(i, separate_number);
      for (const follower of follow_list) {
        const mid = follower.mid;
        const uname = follower.uname;
        followersData.push({ mid, uname });
      }
    }
    fs.writeFileSync("followers.json", JSON.stringify(followersData, null, 2));
  }

  const exclude_list = `
  爱妖术的侄女
  小小小-雷
  古月秋明
  雕一蝉
  花子木鱼
  品诺美食开课啦
  峰成户
  梨土猪式会社
  技术蛋老师
  手工耿
  `
    .trim()
    .split("\n")
    .map((item) => item.trim());

  for (const follower of followersData) {
    const mid = follower.mid;
    const uname = follower.uname;
    if (exclude_list.includes(uname.trim())) {
      console.log(`Excluding ${uname}...`);
      continue;
    } else {
      console.log(`Unfollowing ${uname}...`);
      try {
        const res = await modify_follow(mid, "unfollow");
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }
  }

  // for (let wanted of exclude_list) {
  //   wanted = wanted.trim();
  //   const follower = followersData.find((item) => item.uname.trim() == wanted);
  //   console.log(follower);
  //   const mid = follower.mid;
  //   const uname = follower.uname;
  //   console.log(`following ${uname}...`);
  //   try {
  //     const res = await modify_follow(mid, "follow");
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
};

main();
