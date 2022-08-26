module.exports = async function (context, req) {
  const date = "2022-08-26T06:30:58.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

