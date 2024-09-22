module.exports = async function (context, req) {
  const date = "2024-09-22T22:10:59.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

