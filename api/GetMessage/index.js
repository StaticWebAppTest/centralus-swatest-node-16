module.exports = async function (context, req) {
  const date = "2025-01-16T03:13:16.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

