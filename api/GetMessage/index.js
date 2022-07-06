module.exports = async function (context, req) {
  const date = "2022-07-06T12:22:48.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

