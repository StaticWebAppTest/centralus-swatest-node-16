module.exports = async function (context, req) {
  const date = "2025-07-01T10:15:21.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

