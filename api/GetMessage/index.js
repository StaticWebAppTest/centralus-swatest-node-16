module.exports = async function (context, req) {
  const date = "2023-05-06T09:08:19.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

