module.exports = async function (context, req) {
  const date = "2025-01-10T16:14:13.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

