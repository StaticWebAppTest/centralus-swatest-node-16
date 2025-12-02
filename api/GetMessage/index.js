module.exports = async function (context, req) {
  const date = "2025-12-02T15:16:16.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

