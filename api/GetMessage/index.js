module.exports = async function (context, req) {
  const date = "2024-12-19T13:21:12.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

