module.exports = async function (context, req) {
  const date = "2024-04-05T16:12:14.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

