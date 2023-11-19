module.exports = async function (context, req) {
  const date = "2023-11-19T15:08:26.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

