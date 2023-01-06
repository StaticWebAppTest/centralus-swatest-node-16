module.exports = async function (context, req) {
  const date = "2023-01-06T20:10:06.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

