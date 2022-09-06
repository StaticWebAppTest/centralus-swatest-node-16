module.exports = async function (context, req) {
  const date = "2022-09-06T08:15:13.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

