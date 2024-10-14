import { Cookie } from "./config.mjs";

export const getFollowsCount = async () => {
  const followInformation = fetch(
    "https://api.bilibili.com/x/relation/tags?" +
      `
web_location=333.999
w_webid=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcG1faWQiOiIwLjAiLCJidXZpZCI6IkFFMjlGODYwLUZERDktQkVFNy04MDY0LTIwMkUzNzU0NkNCMzk0MjQwaW5mb2MiLCJ1c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NDsgcnY6MTMxLjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvMTMxLjAiLCJidXZpZF9mcCI6IkFFMjlGODYwLUZERDktQkVFNy04MDY0LTIwMkUzNzU0NkNCMzk0MjQwaW5mb2MiLCJiaWxpX3RpY2tldCI6ImI3ZTYwMDU5ZDk3NDZmZDVmYzQ1ODIwYjdiOGE2ZmQyIiwiY3JlYXRlZF9hdCI6MTcyODg0NTM4NCwidHRsIjo4NjQwMCwidXJsIjoiLzIyNDc5NTM4ND9zcG1faWRfZnJvbT0zMzMuMTAwNy4wLjAiLCJyZXN1bHQiOiJub3JtYWwiLCJpc3MiOiJnYWlhIiwiaWF0IjoxNzI4ODQ1Mzg0fQ.akuFYn-Zx-mEEKz7DLv60DDn9S56J4rpxnwzGrV6cyHBMETJbfifEpcht8sFF76h4P8bLCQzK-WuKG8gYFrleB7msdN_7NlqPj7AkOTFOAV4xxh4g5QzJx6KMOFdZfYjysKuajepmCshpYuBd4OdVnVgb5IzPKA6v3hSC0YXSXV0ozhSwowp-31oJeTKcMIRKs6qXQpKxjrRb0n5YkjhZ84US985dDp5EVMhMFQdD0cZmu03G1BC2RJfy3FrYSmmv-ff9iwfJCkNWqM0opvkZw5nuZCW-8zxFUO2V3KnbYrenee5e0yXbsv-J_l11inEVthXmT2Lq02-qaPz4kTV5g
w_rid=eab420475e71a2f89e95552e84be2345
wts=1728845391
    `
        .trim()
        .replace(/\n/g, "&"),
    {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
        Accept: "*/*",
        "Accept-Language":
          "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        Priority: "u=4",
        Cookie: Cookie,
      },
      referrer: "https://space.bilibili.com/224795384/fans/follow",
      method: "GET",
      mode: "cors",
    }
  );
  return await followInformation.then((res) =>
    res.json().then((data) => data.data)
  );
};

export const getFollows = async (pn, ps) => {
  const followList = fetch(
    "https://api.bilibili.com/x/relation/followings?" +
      `
vmid=224795384
pn=${pn}
ps=${ps}
order=desc
order_type=attention
gaia_source=main_web
web_location=333.999
w_webid=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcG1faWQiOiIwLjAiLCJidXZpZCI6IkFFMjlGODYwLUZERDktQkVFNy04MDY0LTIwMkUzNzU0NkNCMzk0MjQwaW5mb2MiLCJ1c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NDsgcnY6MTMxLjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvMTMxLjAiLCJidXZpZF9mcCI6IjM0ZDNkYjJhZDg2ZTNmYTViOGM1NTA4ZDM5MGUwZDljIiwiYmlsaV90aWNrZXQiOiJiN2U2MDA1OWQ5NzQ2ZmQ1ZmM0NTgyMGI3YjhhNmZkMiIsImNyZWF0ZWRfYXQiOjE3Mjg4NDMyODMsInR0bCI6ODY0MDAsInVybCI6Ii8yMjQ3OTUzODQvZmFucy9mb2xsb3ciLCJyZXN1bHQiOiJub3JtYWwiLCJpc3MiOiJnYWlhIiwiaWF0IjoxNzI4ODQzMjgzfQ.XtrwjVxd5VIizM_N9y2XzuiQBESlJLZLNXlk0DAN2fr2rKI9o9Y9vD-UKmtNVkM819aF5UnkqNyWNSaKNG3BsYn5t0Zyqj5yBKyDwnvSAB4tu8Cga8C35x4baoe1_PAXZgpF2t3oa6ZcFJRhtIzqtLPLXqHTHGcZba1SkgPhxIDbwJiWDToMSwechYbUeKDnczOrswiCgjzFTy_8O6Bix7OvZF7ukZlvWecezWAkEE-2CgN3zDZKj2CsAVZ21FkSKDhTX2nGPBtrKdnCDVNvybKpaPvXMeWaeQ0nFhHGTctKHVDhNJMna-50CWpU4CZ2hf7X3rpJxcXCHmg1mOAN9Q
w_rid=98cf1febf641fa34bc65aefc8ca88e68
wts=1728843286
`
        .trim()
        .replace(/\n/g, "&"),
    {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0",
        Accept: "*/*",
        "Accept-Language":
          "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        Priority: "u=4",
        Cookie: Cookie,
      },
      referrer: "https://space.bilibili.com/224795384/fans/follow",
      method: "GET",
      mode: "cors",
    }
  );
  return await followList.then((res) =>
    res.json().then((data) =>
      data.data.list.map((item) => ({
        mid: item.mid,
        uname: item.uname,
      }))
    )
  );
};
