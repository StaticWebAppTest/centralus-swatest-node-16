module.exports = async function (context, req) {
  const date = "2025-02-15T12:20:01.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

