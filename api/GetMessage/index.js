module.exports = async function (context, req) {
  const date = "2024-01-22T13:13:49.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

