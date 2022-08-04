module.exports = async function (context, req) {
  const date = "2022-08-04T08:17:05.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

