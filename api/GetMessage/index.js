module.exports = async function (context, req) {
  const date = "2024-08-02T13:13:26.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

