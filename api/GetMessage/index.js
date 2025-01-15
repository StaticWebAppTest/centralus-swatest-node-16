module.exports = async function (context, req) {
  const date = "2025-01-15T03:13:01.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

