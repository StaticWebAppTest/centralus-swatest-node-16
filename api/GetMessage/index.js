module.exports = async function (context, req) {
  const date = "2025-12-01T17:15:51.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

