module.exports = async function (context, req) {
  const date = "2022-04-30T21:09:51.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

