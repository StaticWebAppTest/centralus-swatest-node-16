module.exports = async function (context, req) {
  const date = "2023-12-29T20:09:20.821Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

