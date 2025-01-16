module.exports = async function (context, req) {
  const date = "2025-01-16T17:10:37.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

