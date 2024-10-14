import { Cookie } from "./config.mjs";

export const modify_follow = async (mid, n) => {
  let followtag;
  if (n === "follow") {
    followtag = "1";
  } else if (n === "unfollow") {
    followtag = "2";
  } else {
    throw new Error(
      "Invalid follow/unfollow tag, please input 'follow' or 'unfollow'"
    );
  }
  const res = await fetch("https://api.bilibili.com/x/relation/modify", {
    credentials: "include",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
      Accept: "*/*",
      "Accept-Language":
        "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
      "Content-Type": "application/x-www-form-urlencoded",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-site",
      Priority: "u=0",
      Cookie: Cookie,
    },
    referrer: "https://space.bilibili.com/224795384/fans/follow",
    body: new URLSearchParams({
      fid: mid, // user id / mid
      act: followtag, // 1: follow, 2: unfollow
      re_src: "11",
      gaia_source: "web_main", // web_main
      spmid: "333.999.0.0",
      extend_content:
        '{"entity":"user","entity_id":429765143,"fp":"0\\u0001936,,1664\\u0001Win32\\u000112\\u0001not+available\\u000124\\u00011\\u0001zh-CN\\u00010\\u00010,,0,,0\\u0001Mozilla/5.0+(Windows+NT+10.0;+Win64;+x64;+rv:131.0)+Gecko/20100101+Firefox/131.0"}',
      csrf: "b7e60059d9746fd5fc45820b7b8a6fd2",
    }).toString(),
    method: "POST",
    mode: "cors",
  });

  return await res.json();
};
