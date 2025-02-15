module.exports = async function (context, req) {
  const date = "2025-02-15T16:12:31.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

