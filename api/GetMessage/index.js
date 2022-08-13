module.exports = async function (context, req) {
  const date = "2022-08-13T04:17:54.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

