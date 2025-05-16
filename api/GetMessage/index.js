module.exports = async function (context, req) {
  const date = "2025-05-16T10:14:13.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

