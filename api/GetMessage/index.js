module.exports = async function (context, req) {
  const date = "2024-01-22T10:10:36.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

