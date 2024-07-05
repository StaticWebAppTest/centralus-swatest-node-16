module.exports = async function (context, req) {
  const date = "2024-07-05T17:09:51.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

