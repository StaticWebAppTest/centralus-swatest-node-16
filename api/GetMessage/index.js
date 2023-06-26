module.exports = async function (context, req) {
  const date = "2023-06-26T07:10:12.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

