module.exports = async function (context, req) {
  const date = "2025-06-05T03:11:48.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

