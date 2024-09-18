module.exports = async function (context, req) {
  const date = "2024-09-18T21:10:17.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

