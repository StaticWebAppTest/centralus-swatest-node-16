module.exports = async function (context, req) {
  const date = "2025-01-20T17:10:01.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

