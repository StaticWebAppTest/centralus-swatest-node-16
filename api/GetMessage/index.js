module.exports = async function (context, req) {
  const date = "2023-09-06T20:08:58.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

