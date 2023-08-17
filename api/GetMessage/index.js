module.exports = async function (context, req) {
  const date = "2023-08-17T02:12:00.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

