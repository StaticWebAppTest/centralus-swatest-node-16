module.exports = async function (context, req) {
  const date = "2025-03-28T09:13:41.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

