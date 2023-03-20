module.exports = async function (context, req) {
  const date = "2023-03-20T03:10:05.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

