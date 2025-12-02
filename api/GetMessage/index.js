module.exports = async function (context, req) {
  const date = "2025-12-02T18:22:42.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

