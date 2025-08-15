module.exports = async function (context, req) {
  const date = "2025-08-15T17:12:02.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

