module.exports = async function (context, req) {
  const date = "2025-08-20T22:11:56.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

