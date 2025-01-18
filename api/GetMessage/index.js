module.exports = async function (context, req) {
  const date = "2025-01-18T16:12:13.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

