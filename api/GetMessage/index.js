module.exports = async function (context, req) {
  const date = "2025-03-01T12:20:51.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

