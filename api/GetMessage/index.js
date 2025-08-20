module.exports = async function (context, req) {
  const date = "2025-08-20T23:12:24.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

