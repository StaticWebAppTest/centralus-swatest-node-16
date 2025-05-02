module.exports = async function (context, req) {
  const date = "2025-05-02T16:15:46.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

