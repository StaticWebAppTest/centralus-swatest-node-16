module.exports = async function (context, req) {
  const date = "2025-11-25T23:12:47.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

