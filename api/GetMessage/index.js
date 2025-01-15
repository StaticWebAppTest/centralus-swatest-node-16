module.exports = async function (context, req) {
  const date = "2025-01-15T15:11:47.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

