module.exports = async function (context, req) {
  const date = "2023-04-04T02:02:14.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

