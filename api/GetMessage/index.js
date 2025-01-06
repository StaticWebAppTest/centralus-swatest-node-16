module.exports = async function (context, req) {
  const date = "2025-01-06T00:59:50.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

