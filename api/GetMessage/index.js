module.exports = async function (context, req) {
  const date = "2025-08-28T16:16:32.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

