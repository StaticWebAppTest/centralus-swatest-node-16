module.exports = async function (context, req) {
  const date = "2022-07-05T00:58:17.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

