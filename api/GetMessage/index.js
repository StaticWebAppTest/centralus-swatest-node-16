module.exports = async function (context, req) {
  const date = "2025-12-05T22:13:25.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

