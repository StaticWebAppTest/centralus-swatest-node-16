module.exports = async function (context, req) {
  const date = "2025-01-04T13:15:46.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

