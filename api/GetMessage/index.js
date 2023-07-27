module.exports = async function (context, req) {
  const date = "2023-07-27T20:08:58.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

