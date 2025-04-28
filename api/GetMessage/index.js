module.exports = async function (context, req) {
  const date = "2025-04-28T20:13:50.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

