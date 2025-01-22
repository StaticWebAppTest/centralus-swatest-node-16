module.exports = async function (context, req) {
  const date = "2025-01-22T09:12:20.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

