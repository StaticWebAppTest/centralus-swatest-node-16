module.exports = async function (context, req) {
  const date = "2023-03-21T02:00:40.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

