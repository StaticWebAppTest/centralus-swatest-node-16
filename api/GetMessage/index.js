module.exports = async function (context, req) {
  const date = "2024-04-19T02:20:26.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

