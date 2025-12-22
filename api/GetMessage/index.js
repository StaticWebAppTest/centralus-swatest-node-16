module.exports = async function (context, req) {
  const date = "2025-12-22T22:14:25.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

