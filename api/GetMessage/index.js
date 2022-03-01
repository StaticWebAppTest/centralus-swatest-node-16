module.exports = async function (context, req) {
  const date = "2022-03-01T02:12:31.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

