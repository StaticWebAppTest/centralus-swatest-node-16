module.exports = async function (context, req) {
  const date = "2025-02-20T11:09:58.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

