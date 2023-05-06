module.exports = async function (context, req) {
  const date = "2023-05-06T04:10:08.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

