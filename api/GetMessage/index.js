module.exports = async function (context, req) {
  const date = "2025-12-20T17:11:24.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

