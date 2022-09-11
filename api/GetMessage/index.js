module.exports = async function (context, req) {
  const date = "2022-09-11T13:28:14.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

