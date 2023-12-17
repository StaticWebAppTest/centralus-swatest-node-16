module.exports = async function (context, req) {
  const date = "2023-12-17T15:08:10.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

