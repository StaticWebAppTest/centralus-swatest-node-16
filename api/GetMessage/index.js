module.exports = async function (context, req) {
  const date = "2024-01-16T05:09:16.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

