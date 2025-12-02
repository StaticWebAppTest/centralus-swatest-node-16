module.exports = async function (context, req) {
  const date = "2025-12-02T08:20:47.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

