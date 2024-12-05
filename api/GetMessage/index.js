module.exports = async function (context, req) {
  const date = "2024-12-05T19:09:38.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

