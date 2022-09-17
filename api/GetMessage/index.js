module.exports = async function (context, req) {
  const date = "2022-09-17T19:09:20.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

