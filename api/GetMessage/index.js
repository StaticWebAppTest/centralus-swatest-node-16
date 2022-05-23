module.exports = async function (context, req) {
  const date = "2022-05-23T22:12:04.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

