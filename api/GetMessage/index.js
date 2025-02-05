module.exports = async function (context, req) {
  const date = "2025-02-05T13:18:32.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

