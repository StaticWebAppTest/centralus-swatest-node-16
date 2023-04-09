module.exports = async function (context, req) {
  const date = "2023-04-09T12:15:11.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

