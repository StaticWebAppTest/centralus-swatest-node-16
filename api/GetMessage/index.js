module.exports = async function (context, req) {
  const date = "2023-09-26T20:09:29.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

