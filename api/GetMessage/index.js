module.exports = async function (context, req) {
  const date = "2022-07-05T11:10:25.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

