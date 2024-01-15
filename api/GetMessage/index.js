module.exports = async function (context, req) {
  const date = "2024-01-15T04:12:11.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

