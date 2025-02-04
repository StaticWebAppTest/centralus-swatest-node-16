module.exports = async function (context, req) {
  const date = "2025-02-04T16:14:16.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

