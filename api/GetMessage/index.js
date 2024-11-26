module.exports = async function (context, req) {
  const date = "2024-11-26T19:10:01.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

