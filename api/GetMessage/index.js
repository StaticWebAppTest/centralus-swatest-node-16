module.exports = async function (context, req) {
  const date = "2024-06-16T13:10:34.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

