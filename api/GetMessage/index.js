module.exports = async function (context, req) {
  const date = "2025-01-20T11:09:48.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

