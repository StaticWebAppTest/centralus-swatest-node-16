module.exports = async function (context, req) {
  const date = "2025-03-01T16:13:00.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

