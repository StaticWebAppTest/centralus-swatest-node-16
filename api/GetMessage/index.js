module.exports = async function (context, req) {
  const date = "2025-07-17T22:13:53.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

