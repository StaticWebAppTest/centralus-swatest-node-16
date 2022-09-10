module.exports = async function (context, req) {
  const date = "2022-09-10T16:15:12.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

