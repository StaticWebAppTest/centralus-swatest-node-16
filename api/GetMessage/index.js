module.exports = async function (context, req) {
  const date = "2025-01-09T17:10:20.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

