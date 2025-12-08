module.exports = async function (context, req) {
  const date = "2025-12-08T09:21:25.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

