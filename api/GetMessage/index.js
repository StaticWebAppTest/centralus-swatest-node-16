module.exports = async function (context, req) {
  const date = "2024-01-15T19:07:12.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

