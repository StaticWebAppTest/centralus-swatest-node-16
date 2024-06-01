module.exports = async function (context, req) {
  const date = "2024-06-01T02:32:28.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

