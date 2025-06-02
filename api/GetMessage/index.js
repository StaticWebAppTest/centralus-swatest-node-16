module.exports = async function (context, req) {
  const date = "2025-06-02T17:12:58.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

