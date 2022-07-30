module.exports = async function (context, req) {
  const date = "2022-07-30T09:09:58.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

