module.exports = async function (context, req) {
  const date = "2024-02-05T23:09:34.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

