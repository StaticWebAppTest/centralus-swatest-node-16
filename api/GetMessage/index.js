module.exports = async function (context, req) {
  const date = "2025-08-28T09:13:55.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

