module.exports = async function (context, req) {
  const date = "2024-09-26T16:14:22.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

