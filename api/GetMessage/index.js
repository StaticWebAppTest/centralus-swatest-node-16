module.exports = async function (context, req) {
  const date = "2023-04-09T02:00:51.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

