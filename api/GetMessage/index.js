module.exports = async function (context, req) {
  const date = "2023-10-19T13:12:16.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

