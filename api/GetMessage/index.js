module.exports = async function (context, req) {
  const date = "2022-05-09T16:17:05.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

