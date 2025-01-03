module.exports = async function (context, req) {
  const date = "2025-01-03T16:13:56.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

