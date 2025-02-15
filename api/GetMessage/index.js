module.exports = async function (context, req) {
  const date = "2025-02-15T13:13:13.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

