module.exports = async function (context, req) {
  const date = "2025-01-27T21:10:48.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

