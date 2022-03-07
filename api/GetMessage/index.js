module.exports = async function (context, req) {
  const date = "2022-03-07T00:41:49.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

