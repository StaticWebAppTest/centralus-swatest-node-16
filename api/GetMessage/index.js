module.exports = async function (context, req) {
  const date = "2025-02-15T14:09:18.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

