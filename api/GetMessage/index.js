module.exports = async function (context, req) {
  const date = "2025-01-09T10:13:14.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

