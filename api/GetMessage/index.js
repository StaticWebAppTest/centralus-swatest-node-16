module.exports = async function (context, req) {
  const date = "2025-02-04T07:11:23.592Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

