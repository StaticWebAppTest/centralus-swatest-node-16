module.exports = async function (context, req) {
  const date = "2025-01-19T16:12:19.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

