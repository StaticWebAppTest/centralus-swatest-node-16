module.exports = async function (context, req) {
  const date = "2022-08-31T22:11:20.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

