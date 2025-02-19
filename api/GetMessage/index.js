module.exports = async function (context, req) {
  const date = "2025-02-19T10:12:42.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

