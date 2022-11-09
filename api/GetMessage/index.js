module.exports = async function (context, req) {
  const date = "2022-11-09T16:16:13.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

