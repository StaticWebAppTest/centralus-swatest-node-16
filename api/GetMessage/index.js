module.exports = async function (context, req) {
  const date = "2024-09-22T02:22:37.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

