module.exports = async function (context, req) {
  const date = "2022-11-05T16:13:55.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

