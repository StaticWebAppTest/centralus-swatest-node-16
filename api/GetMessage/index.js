module.exports = async function (context, req) {
  const date = "2024-12-01T10:12:59.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

