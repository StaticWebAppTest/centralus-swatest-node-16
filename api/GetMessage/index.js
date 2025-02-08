module.exports = async function (context, req) {
  const date = "2025-02-08T19:09:38.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

