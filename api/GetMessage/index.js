module.exports = async function (context, req) {
  const date = "2025-03-22T22:10:47.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

