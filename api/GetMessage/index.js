module.exports = async function (context, req) {
  const date = "2022-09-13T21:11:05.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

