module.exports = async function (context, req) {
  const date = "2022-04-26T20:11:44.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

