module.exports = async function (context, req) {
  const date = "2025-09-18T00:59:36.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

