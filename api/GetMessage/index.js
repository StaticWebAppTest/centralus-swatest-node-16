module.exports = async function (context, req) {
  const date = "2024-05-25T03:12:11.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

