module.exports = async function (context, req) {
  const date = "2025-08-31T10:12:11.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

