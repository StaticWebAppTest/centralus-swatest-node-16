module.exports = async function (context, req) {
  const date = "2023-06-09T22:08:06.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

