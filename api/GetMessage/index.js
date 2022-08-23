module.exports = async function (context, req) {
  const date = "2022-08-23T20:11:45.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

