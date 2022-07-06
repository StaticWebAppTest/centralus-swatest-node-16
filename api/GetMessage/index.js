module.exports = async function (context, req) {
  const date = "2022-07-06T01:04:14.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

