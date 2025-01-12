module.exports = async function (context, req) {
  const date = "2025-01-12T17:09:27.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

