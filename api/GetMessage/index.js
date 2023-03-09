module.exports = async function (context, req) {
  const date = "2023-03-09T22:10:00.027Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

