module.exports = async function (context, req) {
  const date = "2025-12-15T16:21:21.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

