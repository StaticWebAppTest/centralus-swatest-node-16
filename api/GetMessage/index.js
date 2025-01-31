module.exports = async function (context, req) {
  const date = "2025-01-31T17:09:56.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

