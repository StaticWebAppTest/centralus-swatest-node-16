module.exports = async function (context, req) {
  const date = "2022-07-20T16:14:41.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

