module.exports = async function (context, req) {
  const date = "2023-07-30T08:09:58.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

