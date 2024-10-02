module.exports = async function (context, req) {
  const date = "2024-10-02T00:56:23.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

