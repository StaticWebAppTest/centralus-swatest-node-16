module.exports = async function (context, req) {
  const date = "2024-08-25T10:11:01.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

