module.exports = async function (context, req) {
  const date = "2025-02-03T10:12:43.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

