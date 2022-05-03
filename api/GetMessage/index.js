module.exports = async function (context, req) {
  const date = "2022-05-03T07:10:51.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

