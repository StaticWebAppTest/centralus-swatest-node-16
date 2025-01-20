module.exports = async function (context, req) {
  const date = "2025-01-20T16:13:51.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

