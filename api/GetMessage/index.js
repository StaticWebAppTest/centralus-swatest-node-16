module.exports = async function (context, req) {
  const date = "2024-08-20T23:12:06.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

