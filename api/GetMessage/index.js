module.exports = async function (context, req) {
  const date = "2025-02-28T22:11:12.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

