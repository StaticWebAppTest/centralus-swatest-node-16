module.exports = async function (context, req) {
  const date = "2023-12-31T13:09:21.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

