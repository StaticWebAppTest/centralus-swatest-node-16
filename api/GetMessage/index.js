module.exports = async function (context, req) {
  const date = "2022-05-03T19:13:16.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

