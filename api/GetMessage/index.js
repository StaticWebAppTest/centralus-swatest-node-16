module.exports = async function (context, req) {
  const date = "2025-01-08T10:13:00.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

