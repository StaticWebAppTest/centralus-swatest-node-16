module.exports = async function (context, req) {
  const date = "2023-02-26T17:08:20.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

