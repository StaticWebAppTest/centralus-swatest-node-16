module.exports = async function (context, req) {
  const date = "2025-08-22T17:12:01.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

