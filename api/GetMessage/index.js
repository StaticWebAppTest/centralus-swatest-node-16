module.exports = async function (context, req) {
  const date = "2025-09-30T10:14:00.402Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

