module.exports = async function (context, req) {
  const date = "2025-06-02T10:14:54.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

