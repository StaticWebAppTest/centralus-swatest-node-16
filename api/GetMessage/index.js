module.exports = async function (context, req) {
  const date = "2025-01-21T17:11:28.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

