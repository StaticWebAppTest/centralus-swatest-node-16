module.exports = async function (context, req) {
  const date = "2025-09-02T13:24:49.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

