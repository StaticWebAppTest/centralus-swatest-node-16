module.exports = async function (context, req) {
  const date = "2023-10-07T15:07:49.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

