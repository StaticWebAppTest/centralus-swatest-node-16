module.exports = async function (context, req) {
  const date = "2024-09-23T03:17:14.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

