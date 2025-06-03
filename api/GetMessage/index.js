module.exports = async function (context, req) {
  const date = "2025-06-03T10:15:16.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

