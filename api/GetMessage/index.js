module.exports = async function (context, req) {
  const date = "2025-02-08T14:09:48.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

