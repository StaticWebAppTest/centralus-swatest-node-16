module.exports = async function (context, req) {
  const date = "2022-07-20T00:57:33.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

