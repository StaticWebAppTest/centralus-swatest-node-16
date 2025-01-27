module.exports = async function (context, req) {
  const date = "2025-01-27T17:10:22.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

