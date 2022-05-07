module.exports = async function (context, req) {
  const date = "2022-05-07T17:13:12.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

