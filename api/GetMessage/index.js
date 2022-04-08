module.exports = async function (context, req) {
  const date = "2022-04-08T06:13:18.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

