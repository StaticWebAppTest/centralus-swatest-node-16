module.exports = async function (context, req) {
  const date = "2023-06-06T22:08:00.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

