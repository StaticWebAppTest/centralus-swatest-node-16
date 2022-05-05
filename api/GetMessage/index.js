module.exports = async function (context, req) {
  const date = "2022-05-05T00:56:13.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

