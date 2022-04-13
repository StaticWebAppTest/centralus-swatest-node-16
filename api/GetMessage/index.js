module.exports = async function (context, req) {
  const date = "2022-04-13T15:11:03.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

