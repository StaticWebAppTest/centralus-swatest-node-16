module.exports = async function (context, req) {
  const date = "2022-12-26T07:08:58.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

