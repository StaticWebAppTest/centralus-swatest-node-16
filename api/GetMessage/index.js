module.exports = async function (context, req) {
  const date = "2025-12-02T10:16:08.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

