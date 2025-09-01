module.exports = async function (context, req) {
  const date = "2025-09-01T11:11:05.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

