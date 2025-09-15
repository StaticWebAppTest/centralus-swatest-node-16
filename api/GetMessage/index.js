module.exports = async function (context, req) {
  const date = "2025-09-15T10:13:59.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

