module.exports = async function (context, req) {
  const date = "2024-06-02T21:09:41.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

