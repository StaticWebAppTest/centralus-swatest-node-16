module.exports = async function (context, req) {
  const date = "2023-09-30T01:40:20.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

