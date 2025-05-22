module.exports = async function (context, req) {
  const date = "2025-05-22T17:11:53.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

