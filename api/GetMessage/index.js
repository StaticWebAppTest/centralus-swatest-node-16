module.exports = async function (context, req) {
  const date = "2025-02-25T08:16:30.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

