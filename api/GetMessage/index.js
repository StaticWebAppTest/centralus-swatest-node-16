module.exports = async function (context, req) {
  const date = "2024-12-27T16:13:27.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

