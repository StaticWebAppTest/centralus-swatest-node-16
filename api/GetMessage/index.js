module.exports = async function (context, req) {
  const date = "2024-08-15T13:14:05.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

