module.exports = async function (context, req) {
  const date = "2025-01-24T17:10:00.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

