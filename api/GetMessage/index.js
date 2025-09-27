module.exports = async function (context, req) {
  const date = "2025-09-27T06:16:48.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

