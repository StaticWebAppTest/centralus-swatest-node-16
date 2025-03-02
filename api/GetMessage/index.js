module.exports = async function (context, req) {
  const date = "2025-03-02T10:12:14.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

