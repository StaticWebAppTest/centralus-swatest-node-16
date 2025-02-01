module.exports = async function (context, req) {
  const date = "2025-02-01T06:15:14.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

