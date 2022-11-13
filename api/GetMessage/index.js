module.exports = async function (context, req) {
  const date = "2022-11-13T12:21:11.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

