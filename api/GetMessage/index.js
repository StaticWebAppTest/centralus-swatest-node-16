module.exports = async function (context, req) {
  const date = "2025-12-21T03:23:42.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

