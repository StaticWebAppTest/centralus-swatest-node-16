module.exports = async function (context, req) {
  const date = "2025-01-01T12:21:45.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

