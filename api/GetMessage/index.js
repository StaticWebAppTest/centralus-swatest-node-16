module.exports = async function (context, req) {
  const date = "2025-05-02T03:03:29.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

