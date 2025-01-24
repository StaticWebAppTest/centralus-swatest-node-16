module.exports = async function (context, req) {
  const date = "2025-01-24T10:12:47.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

