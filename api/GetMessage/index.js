module.exports = async function (context, req) {
  const date = "2024-12-26T22:10:33.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

