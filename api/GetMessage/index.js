module.exports = async function (context, req) {
  const date = "2025-08-20T10:14:13.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

