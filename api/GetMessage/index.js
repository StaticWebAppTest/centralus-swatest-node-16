module.exports = async function (context, req) {
  const date = "2025-03-02T21:11:04.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

