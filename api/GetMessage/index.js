module.exports = async function (context, req) {
  const date = "2024-07-24T02:36:49.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

