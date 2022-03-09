module.exports = async function (context, req) {
  const date = "2022-03-09T19:08:37.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

