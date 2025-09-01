module.exports = async function (context, req) {
  const date = "2025-09-01T12:27:40.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

