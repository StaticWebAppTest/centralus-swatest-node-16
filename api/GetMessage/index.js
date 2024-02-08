module.exports = async function (context, req) {
  const date = "2024-02-08T22:08:16.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

