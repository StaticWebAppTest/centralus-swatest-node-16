module.exports = async function (context, req) {
  const date = "2024-06-02T02:32:34.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

