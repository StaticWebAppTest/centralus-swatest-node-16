module.exports = async function (context, req) {
  const date = "2022-03-21T20:11:12.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

