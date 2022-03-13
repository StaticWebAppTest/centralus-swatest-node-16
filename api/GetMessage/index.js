module.exports = async function (context, req) {
  const date = "2022-03-13T03:10:34.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

