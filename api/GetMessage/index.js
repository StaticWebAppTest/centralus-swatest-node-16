module.exports = async function (context, req) {
  const date = "2025-01-04T03:14:56.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

