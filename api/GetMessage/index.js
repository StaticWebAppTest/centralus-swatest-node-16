module.exports = async function (context, req) {
  const date = "2023-05-17T22:08:11.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

