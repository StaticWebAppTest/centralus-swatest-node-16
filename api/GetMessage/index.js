module.exports = async function (context, req) {
  const date = "2025-09-02T10:14:12.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

