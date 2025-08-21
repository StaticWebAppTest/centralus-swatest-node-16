module.exports = async function (context, req) {
  const date = "2025-08-21T07:16:40.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

