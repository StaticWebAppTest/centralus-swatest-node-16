module.exports = async function (context, req) {
  const date = "2024-09-06T20:11:59.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

