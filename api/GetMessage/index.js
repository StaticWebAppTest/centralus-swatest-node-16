module.exports = async function (context, req) {
  const date = "2025-02-22T03:14:11.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

