module.exports = async function (context, req) {
  const date = "2024-03-09T02:12:18.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

