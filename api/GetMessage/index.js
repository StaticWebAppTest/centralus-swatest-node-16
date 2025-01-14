module.exports = async function (context, req) {
  const date = "2025-01-14T04:13:49.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

