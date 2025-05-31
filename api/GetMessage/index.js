module.exports = async function (context, req) {
  const date = "2025-05-31T08:16:14.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

