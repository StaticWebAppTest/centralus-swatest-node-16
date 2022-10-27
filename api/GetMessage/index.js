module.exports = async function (context, req) {
  const date = "2022-10-27T10:13:11.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

