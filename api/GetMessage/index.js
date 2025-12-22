module.exports = async function (context, req) {
  const date = "2025-12-22T17:13:31.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

