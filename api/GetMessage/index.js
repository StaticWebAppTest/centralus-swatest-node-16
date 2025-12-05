module.exports = async function (context, req) {
  const date = "2025-12-05T23:13:28.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

