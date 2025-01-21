module.exports = async function (context, req) {
  const date = "2025-01-21T04:13:57.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

