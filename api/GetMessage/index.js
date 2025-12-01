module.exports = async function (context, req) {
  const date = "2025-12-01T11:12:57.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

