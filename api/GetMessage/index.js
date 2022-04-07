module.exports = async function (context, req) {
  const date = "2022-04-07T21:09:26.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

