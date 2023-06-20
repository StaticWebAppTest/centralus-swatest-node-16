module.exports = async function (context, req) {
  const date = "2023-06-20T02:06:00.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

