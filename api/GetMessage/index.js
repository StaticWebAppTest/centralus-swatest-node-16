module.exports = async function (context, req) {
  const date = "2022-12-24T19:06:59.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

