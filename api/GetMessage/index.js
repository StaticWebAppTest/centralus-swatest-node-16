module.exports = async function (context, req) {
  const date = "2024-04-22T06:12:52.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

