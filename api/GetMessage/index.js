module.exports = async function (context, req) {
  const date = "2023-09-03T00:41:58.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

