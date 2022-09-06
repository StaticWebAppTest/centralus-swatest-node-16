module.exports = async function (context, req) {
  const date = "2022-09-06T12:23:45.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

