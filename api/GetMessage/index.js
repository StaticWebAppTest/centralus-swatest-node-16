module.exports = async function (context, req) {
  const date = "2025-01-20T13:18:15.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

