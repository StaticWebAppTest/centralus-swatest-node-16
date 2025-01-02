module.exports = async function (context, req) {
  const date = "2025-01-02T15:11:33.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

