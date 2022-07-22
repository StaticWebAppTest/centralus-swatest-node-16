module.exports = async function (context, req) {
  const date = "2022-07-22T08:16:26.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

