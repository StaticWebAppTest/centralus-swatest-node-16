module.exports = async function (context, req) {
  const date = "2025-01-16T22:10:36.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

