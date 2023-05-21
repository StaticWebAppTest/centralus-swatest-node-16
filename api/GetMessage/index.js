module.exports = async function (context, req) {
  const date = "2023-05-21T22:07:44.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

