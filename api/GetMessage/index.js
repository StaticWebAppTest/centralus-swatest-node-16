module.exports = async function (context, req) {
  const date = "2023-04-04T06:11:58.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

