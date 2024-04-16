module.exports = async function (context, req) {
  const date = "2024-04-16T06:12:15.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

