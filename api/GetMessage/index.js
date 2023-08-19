module.exports = async function (context, req) {
  const date = "2023-08-19T22:07:08.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

