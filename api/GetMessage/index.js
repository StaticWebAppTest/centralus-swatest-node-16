module.exports = async function (context, req) {
  const date = "2025-01-16T02:09:23.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

