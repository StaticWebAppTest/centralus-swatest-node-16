module.exports = async function (context, req) {
  const date = "2025-06-15T12:24:45.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

