module.exports = async function (context, req) {
  const date = "2023-01-19T12:18:54.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

