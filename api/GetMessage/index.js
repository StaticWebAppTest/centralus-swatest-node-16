module.exports = async function (context, req) {
  const date = "2025-01-20T22:10:39.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

