module.exports = async function (context, req) {
  const date = "2022-08-24T16:15:06.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

